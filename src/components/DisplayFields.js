import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function DisplayFields({ fields, removeField }) {
    return (
        <table>
            <tbody>
            {fields.map((s, id) => (
                <tr key={id}>
                <td>{s.label}</td>
                <td>
                    <IconButton onClick={() => removeField(s.value)}>
                    <RemoveIcon />
                    </IconButton>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default DisplayFields;
