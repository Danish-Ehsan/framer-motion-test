import { useState } from "react";
import "./App.scss";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [activeComponent, setActiveComponent] = useState(1);

    return (
        <>
            <h1>Framer Motion Test</h1>
            <div className="component__cont">
                <AnimatePresence initial={false}>
                    {activeComponent === 1 ? (
                        <ComponentA key="ComponentA" />
                    ) : (
                        <ComponentB key="ComponentB" />
                    )}
                </AnimatePresence>
            </div>
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
            {/* <ComponentC /> */}
            <hr />
            <ComponentD />
            <hr />
            <ComponentE />
            <hr />
            <ComponentF />
        </>
    );
}

function ComponentA() {
    return (
        <motion.div
            className="component absolute blue"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
        >
            Component A
        </motion.div>
    );
}

function ComponentB() {
    return (
        <motion.div
            className="component absolute red"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
        >
            Component B
        </motion.div>
    );
}

// eslint-disable-next-line no-unused-vars
function ComponentC() {
    return (
        <motion.div
            className="component purple"
            animate={{
                scale: [0.8, 1, 0.8],
                y: [0, 100, 0]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: 1
            }}
        >
            Component C
        </motion.div>
    );
}

function ComponentD() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div
            className={
                isActive
                    ? "layout-component__cont active"
                    : "layout-component__cont"
            }
        >
            <motion.button
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={
                    isActive ? "layout-component active" : "layout-component"
                }
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                {isActive ? "true" : "false"}
            </motion.button>
        </div>
    );
}

function ComponentE() {
    const [isVisible, setIsVisible] = useState(true);
    const [listItems, setListItems] = useState([
        "Item One",
        "Item Two",
        "Item Three"
    ]);

    const list = {
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        hidden: {
            transition: {
                when: "afterChildren"
            }
        }
    };

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -20 }
    };

    return (
        <>
            <motion.ul
                className="component-list"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={list}
            >
                {listItems.map((elm) => {
                    return (
                        <motion.li key={elm} variants={item} layout>
                            {elm}
                        </motion.li>
                    );
                })}
            </motion.ul>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide List" : "Show List"}
            </button>
            <button
                onClick={() => {
                    const newArray = [...listItems];
                    newArray.reverse();
                    setListItems(newArray);
                }}
                style={{ marginLeft: "10px" }}
            >
                Reverse
            </button>
        </>
    );
}

function ComponentF() {
    const tabs = ["word", "longer word", "much longer word"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const tabElements = tabs.map((elm, i) => {
        return (
            <li key={elm}>
                {activeTab === tabs[i] && (
                    <motion.div
                        layoutId="tab-bkg"
                        className="tab-bkg"
                        style={{ borderRadius: "8px" }}
                    ></motion.div>
                )}
                <button
                    onClick={() => {
                        setActiveTab(tabs[i]);
                    }}
                >
                    {elm}
                </button>
            </li>
        );
    });

    return <ul className="tabs-list">{tabElements}</ul>;
}

export default App;
