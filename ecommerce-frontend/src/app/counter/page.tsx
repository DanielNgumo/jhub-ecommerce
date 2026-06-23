'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CounterPage() {
    const [count, setCount] = useState(0)
    const [onChange, setOnchange] = useState(0)

    return (


        <div className="grid items-center justify-center gap-4 mt-16 bg-indigo-500">
            <div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>+</button>
                <span className="mx-2 text-xl font-bold">{count}</span>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count - 1)}>-</button>
            </div>

            <div>
                <input type="text" className="border border-gray-300 rounded-md px-2 py-1" value={count} onChange={(e) =>  setCount(Number(e.target.value))} />

            </div>

            {/* <input type="checkbox" checked={onChange} onChange={(e) => setOnchange(e.target.checked)} /> */}
        </div>
    )
}
