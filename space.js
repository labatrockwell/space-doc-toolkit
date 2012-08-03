{
    "spimes": [
        {
            "spime": {
                "name": "LED Sign",
                "description": "This is RGB controllable LED sign. It's physical dimenstions are about 5x26 inches. It can support about 20 characters depending on the font and configuration.",
                "publish": {
                    "message": [
                        {
                            "name": "partyModeOn",
                            "type": "boolean",
                            "#default": "false"
                        },
                        {
                            "name": "currentColor",
                            "type": "number",
                            "#default": "1023"
                        },
                        {
                            "name": "currentMessage",
                            "type": "string",
                            "#default": "not-updated"
                        }
                    ]
                },
                "subscribe": {
                    "message": [
                        {
                            "name": "partyMode",
                            "type": "boolean"
                        },
                        {
                            "name": "color",
                            "type": "number"
                        },
                        {
                            "name": "text",
                            "type": "string"
                        }
                    ]
                }
            }
        },
        {
            "spime": {
                "name": "Button",
                "description": "This is a magical button, not unlike the big red button in Ren and Stimpy. We dare you not to push it. ",
                "publish": {
                    "message": [
                        {
                            "name": "buttonPress",
                            "type": "boolean",
                            "#default": "false"
                        },
                        {
                            "name": "numberPresses",
                            "type": "number",
                            "#default": "0"
                        },
                        {
                            "name": "hashtag",
                            "type": "string",
                            "#default": "#pressed"
                        }
                    ]
                }
            }
        },
        {
            "spime": {
                "name": "Nerf Gun",
                "description": "An internet controlled Nerf gun. Pretty much the nerd dream. Use it to fire \"messages\" to those in the LAB. ",
                "publish": {
                    "message": [
                        {
                            "name": "hasAmmo",
                            "type": "boolean",
                            "#default": "false"
                        }
                    ]
                },
                "subscribe": {
                    "message": [
                        {
                            "name": "fire",
                            "type": "boolean"
                        },
                        {
                            "name": "killingword",
                            "type": "string"
                        }
                    ]
                }
            }
        }
    ]
}