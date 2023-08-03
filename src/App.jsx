import { useState } from "react";
import "./App.scss";
import { motion } from "framer-motion";

function App() {
    const [activeComponent, setActiveComponent] = useState(1);

    return (
        <>
            <h1>Framer Motion Test</h1>
            {activeComponent === 1 ? <ComponentA /> : <ComponentB />}
            <div className="card">
                <button
                    onClick={() => {
                        if (activeComponent === 1) {
                            setActiveComponent(2);
                        } else {
                            setActiveComponent(1);
                        }
                    }}
                >
                    Switch Component
                </button>
            </div>
        </>
    );
}

function ComponentA() {
    return (
        <motion.div
            className="component blue"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Component A
        </motion.div>
    );
}

function ComponentB() {
    return (
        <motion.div
            className="component red"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Component B
        </motion.div>
    );
}

export default App;
