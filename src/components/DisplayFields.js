import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function DisplayFields({ fields, removeField }) {
    return (
        <table className="w-full">
            <tbody>
            {fields.map((s, id) => (
                <div key={id} className="grid grid-cols-10" >
                    <div className="col-span-1 flex items-center justify-center">
                        {
                            s.value !== 'account_name' ? 
                                <div className="h-3 w-3 bg-green-700 rounded-full"></div> :
                                <div className="h-3 w-3 bg-red-700 rounded-full"></div>
                        }
                    </div>
                    <div className="col-span-7 flex items-center">{s.label}</div>
                    <div className="col-span-2 flex items-center justify-center">
                        <IconButton onClick={() => removeField(s.value)}>
                        <RemoveIcon />
                        </IconButton>
                    </div>
                </div>
            ))}
            </tbody>
        </table>
    );
}

export default DisplayFields;
