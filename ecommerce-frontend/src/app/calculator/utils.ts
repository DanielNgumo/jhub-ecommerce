export interface CalculatorState {
    expression: string;
    result: string;
    isEvaluated: boolean;
    announcement: string;
}

// Perform safe mathematical evaluation
export const evaluateExpression = (expr: string): string => {
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

// State transition reducer for the calculator logic
export const getNextCalculatorState = (
    currentState: CalculatorState,
    value: string
): CalculatorState => {
    const { expression, result, isEvaluated } = currentState

    if (value === "AC") {
        return {
            expression: "",
            result: "",
            isEvaluated: false,
            announcement: "Cleared"
        }
    }

    if (value === "DEL") {
        if (isEvaluated) {
            // If showing calculation result, DEL clears everything
            return {
                expression: "",
                result: "",
                isEvaluated: false,
                announcement: "Cleared"
            }
        } else {
            // Delete last character, handling space around operators
            const trimmed = expression.trimEnd()
            let nextExpr = ""
            if (trimmed.endsWith(" +") || trimmed.endsWith(" -") || trimmed.endsWith(" *") || trimmed.endsWith(" /")) {
                nextExpr = trimmed.slice(0, -2) // remove " +"
            } else {
                nextExpr = trimmed.slice(0, -1)
            }
            return {
                expression: nextExpr,
                result,
                isEvaluated: false,
                announcement: `Deleted. Remaining expression: ${nextExpr}`
            }
        }
    }

    if (value === "=") {
        if (!expression) return currentState
        const evalResult = evaluateExpression(expression)
        return {
            expression,
            result: evalResult,
            isEvaluated: true,
            announcement: `Equals. Result is ${evalResult}`
        }
    }

    // Adding operator or digit
    const isOperator = ["+", "-", "*", "/"].includes(value)

    if (isEvaluated) {
        let nextExpr = ""
        if (isOperator && result !== "Syntax ERROR" && result !== "Math ERROR") {
            // Chain calculations starting with the last result
            nextExpr = result + " " + value + " "
        } else {
            // Start a new calculation
            nextExpr = isOperator ? " " + value + " " : value
        }
        return {
            expression: nextExpr,
            result: "",
            isEvaluated: false,
            announcement: isOperator ? `Chained ${value}` : `Started new expression: ${value}`
        }
    } else {
        let nextExpr = expression
        if (isOperator) {
            nextExpr += " " + value + " "
        } else {
            nextExpr += value
        }
        return {
            expression: nextExpr,
            result,
            isEvaluated: false,
            announcement: `Typed ${value}`
        }
    }
}
