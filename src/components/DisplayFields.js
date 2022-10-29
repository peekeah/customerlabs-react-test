import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function DisplayFields({ fields, removeField }) {
    return (
        <table className="w-full">
            <tbody>
            {fields.map((s, id) => (
                <tr key={id} className="grid grid-cols-6" >
                    <td className="col-span-5">{s.label}</td>
                    <td className="col-span-1">
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
