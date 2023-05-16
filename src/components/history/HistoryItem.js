import React from "react";

export default function HistoryItem ({historyItem}) {
    return (
        <tr key={historyItem.id}>
        <td>{historyItem.guess.join(" ")}</td>
        <td>{historyItem.bulls}</td>
        <td>{historyItem.cows}</td>
        </tr>
    );
}