import React from "react";
import useFetch from "../hooks/useFetch";

const listStyle = {
    padding: "1rem",
    borderTop: "solid 1px black",
    borderBottom: "solid 1px black",
};

const itemStyle = {
    padding: "0.5rem",
    fontSize: "0.9rem",
};

export default function ListComponent({ url }) {
    const data = useFetch(url);

    if (data === null) {
        return <div className="loading">Loading list ...</div>;
    }

    return (
        <div style={listStyle}>
            {data.map(item => (
                <div key={item.name} style={itemStyle}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}
