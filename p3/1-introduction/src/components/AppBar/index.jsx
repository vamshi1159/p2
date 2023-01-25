import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Appbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>Logo</Typography>
                    <Button color="warning" sx={{ marginLeft: "auto" }}>
                        HELLO
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
