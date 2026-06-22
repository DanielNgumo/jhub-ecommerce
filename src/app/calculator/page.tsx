'use client'

import { useState, useEffect, useCallback } from "react"
import styles from "./calculator.module.css"

export default function Calculator() {
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState("")
    const [isEvaluated, setIsEvaluated] = useState(false)
    const [activeKeys, setActiveKeys] = useState<Record<string, boolean>>({})
    const [announcement, setAnnouncement] = useState("") // for screen readers

    // Perform safe mathematical evaluation
    const evaluateExpression = (expr: string): string => {
        // Remove spaces
        const sanitized = expr.replace(/\s+/g, "")
        
        // Check for empty expression
        if (!sanitized) return ""

        // Validate that it only contains numbers, basic operators, parentheses, and dots
        if (!/^[0-9+\-*/().]+$/.test(sanitized)) {
            return "Syntax ERROR"
        }

        try {
            // Safe evaluation using Function constructor on validated math-only string
            const calcResult = new Function(`return (${sanitized})`)()
            
            if (calcResult === undefined || calcResult === null || isNaN(calcResult)) {
                return "Math ERROR"
            }
            if (!isFinite(calcResult)) {
                return "Math ERROR"
            }

            const num = Number(calcResult)
            if (Number.isInteger(num)) {
                return num.toString()
            } else {
                // Return result rounded to max 8 decimal places and strip trailing zeros
                return parseFloat(num.toFixed(8)).toString()
            }
        } catch (error) {
            return "Syntax ERROR"
        }
    }

    // Handles button clicks and keypress actions
    const handleInput = useCallback((value: string) => {
        if (value === "AC") {
            setExpression("")
            setResult("")
            setIsEvaluated(false)
            setAnnouncement("Cleared")
        } else if (value === "DEL") {
            if (isEvaluated) {
                // If showing calculation result, DEL clears everything
                setExpression("")
                setResult("")
                setIsEvaluated(false)
                setAnnouncement("Cleared")
            } else {
                // Delete last character, handling space around operators
                setExpression(prev => {
                    const trimmed = prev.trimEnd()
                    if (trimmed.endsWith(" +") || trimmed.endsWith(" -") || trimmed.endsWith(" *") || trimmed.endsWith(" /")) {
                        return trimmed.slice(0, -2) // remove " +"
                    }
                    const nextExpr = trimmed.slice(0, -1)
                    setAnnouncement(`Deleted. Remaining expression: ${nextExpr}`)
                    return nextExpr
                })
            }
        } else if (value === "=") {
            if (!expression) return
            const evalResult = evaluateExpression(expression)
            setResult(evalResult)
            setIsEvaluated(true)
            setAnnouncement(`Equals. Result is ${evalResult}`)
        } else {
            // Adding operator or digit
            const isOperator = ["+", "-", "*", "/"].includes(value)

            if (isEvaluated) {
                if (isOperator && result !== "Syntax ERROR" && result !== "Math ERROR") {
                    // Chain calculations starting with the last result
                    setExpression(result + " " + value + " ")
                } else {
                    // Start a new calculation
                    setExpression(isOperator ? " " + value + " " : value)
                }
                setResult("")
                setIsEvaluated(false)
                setAnnouncement(isOperator ? `Chained ${value}` : `Started new expression: ${value}`)
            } else {
                setExpression(prev => {
                    // Auto-insert spacing around operators for better readability
                    if (isOperator) {
                        return prev + " " + value + " "
                    }
                    return prev + value
                })
                setAnnouncement(`Typed ${value}`)
            }
        }
    }, [expression, result, isEvaluated])

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key
            let mappedValue = ""

            if (key >= "0" && key <= "9") mappedValue = key
            else if (key === "+") mappedValue = "+"
            else if (key === "-") mappedValue = "-"
            else if (key === "*") mappedValue = "*"
            else if (key === "/") mappedValue = "/"
            else if (key === ".") mappedValue = "."
            else if (key === "(") mappedValue = "("
            else if (key === ")") mappedValue = ")"
            else if (key === "Enter" || key === "=") mappedValue = "="
            else if (key === "Backspace") mappedValue = "DEL"
            else if (key === "Escape" || key === "Delete") mappedValue = "AC"
            else if (key.toLowerCase() === "c") mappedValue = "AC"

            if (mappedValue) {
                e.preventDefault()
                // Mark key active for visual button press effect
                setActiveKeys(prev => ({ ...prev, [mappedValue]: true }))
                handleInput(mappedValue)
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            const key = e.key
            let mappedValue = ""

            if (key >= "0" && key <= "9") mappedValue = key
            else if (key === "+") mappedValue = "+"
            else if (key === "-") mappedValue = "-"
            else if (key === "*") mappedValue = "*"
            else if (key === "/") mappedValue = "/"
            else if (key === ".") mappedValue = "."
            else if (key === "(") mappedValue = "("
            else if (key === ")") mappedValue = ")"
            else if (key === "Enter" || key === "=") mappedValue = "="
            else if (key === "Backspace") mappedValue = "DEL"
            else if (key === "Escape" || key === "Delete") mappedValue = "AC"
            else if (key.toLowerCase() === "c") mappedValue = "AC"

            if (mappedValue) {
                setActiveKeys(prev => {
                    const copy = { ...prev }
                    delete copy[mappedValue]
                    return copy
                })
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [handleInput])

    // Keypad layout definition
    const buttons = [
        { label: "(", value: "(", type: "op" },
        { label: ")", value: ")", type: "op" },
        { label: "DEL", value: "DEL", type: "action" },
        { label: "AC", value: "AC", type: "action" },
        
        { label: "7", value: "7", type: "num" },
        { label: "8", value: "8", type: "num" },
        { label: "9", value: "9", type: "num" },
        { label: "÷", value: "/", type: "op" },
        
        { label: "4", value: "4", type: "num" },
        { label: "5", value: "5", type: "num" },
        { label: "6", value: "6", type: "num" },
        { label: "×", value: "*", type: "op" },
        
        { label: "1", value: "1", type: "num" },
        { label: "2", value: "2", type: "num" },
        { label: "3", value: "3", type: "num" },
        { label: "−", value: "-", type: "op" },
        
        { label: "0", value: "0", type: "num" },
        { label: "•", value: ".", type: "num" },
        { label: "=", value: "=", type: "equals" },
        { label: "+", value: "+", type: "op" }
    ]

    // Determine the style class of a button
    const getBtnClass = (type: string, value: string) => {
        let baseClass = styles.btn
        if (type === "num") baseClass += ` ${styles.btnNum}`
        else if (type === "op") baseClass += ` ${styles.btnOp}`
        else if (type === "action") baseClass += ` ${styles.btnAction}`
        else if (type === "equals") baseClass += ` ${styles.btnEquals}`

        // Add visual pressed effect if key is active via physical keyboard
        if (activeKeys[value]) {
            baseClass += ` ${styles.btnActive}`
        }
        return baseClass
    }

    return (
        <main className={styles.container}>
            {/* Screen Reader Announcements */}
            <div aria-live="polite" aria-atomic="true" className="sr-only" style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                border: '0'
            }}>
                {announcement}
            </div>

            <h1 className={styles.title}>School Calculator</h1>

            <div className={styles.calculator} aria-label="Scientific Calculator Frame">
                {/* 3D screw decorations */}
                <div className={`${styles.screw} ${styles.screwTopLeft}`}></div>
                <div className={`${styles.screw} ${styles.screwTopRight}`}></div>
                <div className={`${styles.screw} ${styles.screwBottomLeft}`}></div>
                <div className={`${styles.screw} ${styles.screwBottomRight}`}></div>

                {/* Calculator Header: Brand & Solar Panel */}
                <div className={styles.header}>
                    <div className={styles.brandInfo}>
                        <span className={styles.brand}>CALCULATOR</span>
                        <span className={styles.model}>AG-82MS SUPER SCIENTIFIC</span>
                    </div>
                    <div className={styles.solarPanel} aria-hidden="true">
                        <div className={styles.solarCell}></div>
                        <div className={styles.solarCell}></div>
                        <div className={styles.solarCell}></div>
                        <div className={styles.solarCell}></div>
                    </div>
                </div>

                {/* Recessed LCD Screen */}
                <div className={styles.displayWrapper}>
                    <div className={styles.screen} role="status" aria-label="Calculator display screen">
                        {/* LCD Status Indicators */}
                        <div className={styles.indicators} aria-hidden="true">
                            <span>D</span>
                            <span>DEG</span>
                            <span>M</span>
                        </div>
                        
                        {/* Expression / Formula Row */}
                        <div className={styles.expressionText} aria-label={`Formula: ${expression}`}>
                            {expression}
                            {!isEvaluated && <span className={styles.cursor} aria-hidden="true" />}
                        </div>

                        {/* Result Row */}
                        <div className={styles.resultText} aria-label={`Result: ${result || '0'}`}>
                            {result || (isEvaluated ? "0" : "")}
                        </div>
                    </div>
                </div>

                {/* Keyboard Grid */}
                <div className={styles.keypad} role="group" aria-label="Calculator Keyboard">
                    {buttons.map((btn, idx) => (
                        <button
                            key={idx}
                            className={getBtnClass(btn.type, btn.value)}
                            onClick={() => handleInput(btn.value)}
                            aria-label={`Key ${btn.label}`}
                            tabIndex={0}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Instruction legend */}
            <div className={styles.instructions}>
                <h2>Keyboard Mapping</h2>
                <ul>
                    <li><span>Number Keys</span> <code>0 - 9</code></li>
                    <li><span>Operators</span> <code>+ , - , * , /</code></li>
                    <li><span>Decimals & Parentheses</span> <code>. , ( , )</code></li>
                    <li><span>Calculate (Equals)</span> <code>Enter / =</code></li>
                    <li><span>Delete Character</span> <code>Backspace</code></li>
                    <li><span>Clear Screen (All Clear)</span> <code>Esc / Del / C</code></li>
                </ul>
            </div>
        </main>
    )
}