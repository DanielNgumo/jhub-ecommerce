'use client'

import { useState, useEffect, useCallback } from "react"
import { getNextCalculatorState, type CalculatorState } from "./utils"

export default function Calculator() {
    const [state, setState] = useState<CalculatorState>({
        expression: "",
        result: "",
        isEvaluated: false,
        announcement: ""
    })
    const [activeKeys, setActiveKeys] = useState<Record<string, boolean>>({})

    const { expression, result, isEvaluated, announcement } = state

    // Handles button clicks and keypress actions
    const handleInput = useCallback((value: string) => {
        setState(prev => getNextCalculatorState(prev, value))
    }, [])

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
        let classes = "relative h-[52px] rounded-lg border-none text-[1.15rem] font-bold text-white cursor-pointer outline-none transition-[background,box-shadow,transform] duration-100 ease-out flex items-center justify-center font-sans"

        if (type === "num") {
            classes += " bg-[linear-gradient(to_bottom,_#4f5165_0%,_#3a3b4e_100%)] border border-[#333446] hover:bg-[linear-gradient(to_bottom,_#5d5f75_0%,_#44455b_100%)]"
        } else if (type === "op") {
            classes += " bg-[linear-gradient(to_bottom,_#383a45_0%,_#282a32_100%)] border border-[#202128] hover:bg-[linear-gradient(to_bottom,_#434552_0%,_#30323c_100%)]"
        } else if (type === "action") {
            classes += " bg-[linear-gradient(to_bottom,_#d95d39_0%,_#be4c2a_100%)] border border-[#a63f21] text-[0.95rem] hover:bg-[linear-gradient(to_bottom,_#e46d4a_0%,_#c95633_100%)]"
        } else if (type === "equals") {
            classes += " bg-[linear-gradient(to_bottom,_#f2a65a_0%,_#d88e43_100%)] border border-[#bf7b35] text-[#1a1b29] hover:bg-[linear-gradient(to_bottom,_#f7b46f_0%,_#e0994f_100%)]"
        }

        // Active/Pressed State (either mouse/touch click via :active, or keyboard trigger via activeKeys)
        classes += " active:translate-y-[3px] active:shadow-[0_1px_0px_rgba(10,11,16,0.8),_inset_0_1px_0px_rgba(255,255,255,0.05)]"

        if (activeKeys[value]) {
            classes += " !translate-y-[3px] !shadow-[0_1px_0px_rgba(10,11,16,0.8),_inset_0_1px_0px_rgba(255,255,255,0.05)]"
        } else {
            classes += " translate-y-0 shadow-[0_4px_0px_rgba(10,11,16,0.8),_inset_0_1px_0px_rgba(255,255,255,0.15)]"
        }

        return classes
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#2c3e50_0%,_#0f171e_100%)] p-5 font-sans text-[#f1f2f6] select-none">
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

            <h1 className="text-2xl font-light tracking-[0.15em] mb-6 uppercase text-[#a0aec0] [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-center">School Calculator</h1>

            <div className="relative w-full max-w-[380px] bg-[linear-gradient(145deg,_#2b2d42_0%,_#1a1b29_100%)] rounded-[28px] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_inset_0_2px_3px_rgba(255,255,255,0.15),_inset_0_-3px_6px_rgba(0,0,0,0.6)] border border-[#373a56]" aria-label="Scientific Calculator Frame">
                {/* 3D screw decorations */}
                <div className="absolute w-2 h-2 bg-[radial-gradient(circle,_#555_30%,_#222_90%)] rounded-full opacity-40 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] top-3 left-3"></div>
                <div className="absolute w-2 h-2 bg-[radial-gradient(circle,_#555_30%,_#222_90%)] rounded-full opacity-40 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] top-3 right-3"></div>
                <div className="absolute w-2 h-2 bg-[radial-gradient(circle,_#555_30%,_#222_90%)] rounded-full opacity-40 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] bottom-3 left-3"></div>
                <div className="absolute w-2 h-2 bg-[radial-gradient(circle,_#555_30%,_#222_90%)] rounded-full opacity-40 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] bottom-3 right-3"></div>

                {/* Calculator Header: Brand & Solar Panel */}
                <div className="flex justify-between items-center mb-5 px-1">
                    <div className="flex flex-col">
                        <span className="text-[1.1rem] font-extrabold tracking-[0.05em] text-[#e2e8f0] [text-shadow:_1px_1px_0px_rgba(0,0,0,0.5)] font-sans leading-none">CALCULATOR</span>
                        <span className="text-[0.55rem] tracking-[0.1em] text-[#a0aec0] font-semibold mt-0.5">AG-82MS SUPER SCIENTIFIC</span>
                    </div>
                    <div className="w-[90px] h-[28px] bg-[linear-gradient(90deg,_#3d2314_0%,_#58331c_50%,_#3d2314_100%)] border-2 border-[#1a1b29] rounded flex gap-2 p-[3px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" aria-hidden="true">
                        <div className="flex-1 bg-black/20 border-r border-white/5 last:border-r-0"></div>
                        <div className="flex-1 bg-black/20 border-r border-white/5 last:border-r-0"></div>
                        <div className="flex-1 bg-black/20 border-r border-white/5 last:border-r-0"></div>
                        <div className="flex-1 bg-black/20 border-r border-white/5 last:border-r-0"></div>
                    </div>
                </div>

                {/* Recessed LCD Screen */}
                <div className="bg-[#11121b] rounded-xl p-3 mb-6 shadow-[inset_0_4px_10px_rgba(0,0,0,0.9),_0_1px_1px_rgba(255,255,255,0.1)] border border-[#232535]">
                    <div className="bg-[#92a492] rounded-[6px] py-3 px-[14px] h-20 flex flex-col justify-between shadow-[inset_0_3px_8px_rgba(0,0,0,0.4)] border border-[#7d8e7d] relative overflow-hidden" role="status" aria-label="Calculator display screen">
                        {/* LCD Glare Effect */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/12 to-transparent pointer-events-none" />

                        {/* LCD Status Indicators */}
                        <div className="absolute top-1 left-3.5 flex gap-1.5 text-[0.5rem] text-[#1a231a] opacity-60 font-sans font-bold" aria-hidden="true">
                            <span>D</span>
                            <span>DEG</span>
                            <span>M</span>
                        </div>
                        
                        {/* Expression / Formula Row */}
                        <div className="text-[#1a231a] font-mono text-right break-all whitespace-nowrap overflow-hidden [text-shadow:_1px_1px_1px_rgba(255,255,255,0.25)] tabular-nums text-[0.95rem] tracking-[0.05em] min-h-[1.2rem] opacity-75" aria-label={`Formula: ${expression}`}>
                            {expression}
                            {!isEvaluated && <span className="inline-block w-[2px] h-[1.2rem] bg-[#1a231a] ml-[2px] animate-[pulse_1s_infinite]" aria-hidden="true" />}
                        </div>

                        {/* Result Row */}
                        <div className="text-[#1a231a] font-mono text-right break-all whitespace-nowrap overflow-hidden [text-shadow:_1px_1px_1px_rgba(255,255,255,0.25)] tabular-nums text-[1.85rem] font-bold tracking-[0.02em] leading-none min-h-[1.85rem]" aria-label={`Result: ${result || '0'}`}>
                            {result || (isEvaluated ? "0" : "")}
                        </div>
                    </div>
                </div>

                {/* Keyboard Grid */}
                <div className="grid grid-cols-4 gap-3" role="group" aria-label="Calculator Keyboard">
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
            <div className="mt-[30px] max-w-[380px] w-full bg-[#2b2d42]/40 backdrop-blur-md rounded-xl p-4 border border-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <h2 className="text-[0.85rem] uppercase tracking-[0.1em] text-[#f2a65a] mb-2.5">Keyboard Mapping</h2>
                <ul className="list-none p-0 m-0">
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Number Keys</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">0 - 9</code></li>
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Operators</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">+ , - , * , /</code></li>
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Decimals & Parentheses</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">. , ( , )</code></li>
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Calculate (Equals)</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">Enter / =</code></li>
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Delete Character</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">Backspace</code></li>
                    <li className="text-[0.75rem] text-[#a0aec0] flex justify-between mb-1.5 last:mb-0"><span>Clear Screen (All Clear)</span> <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-[#e2e8f0]">Esc / Del / C</code></li>
                </ul>
            </div>
        </main>
    )
}