{
    "spimes": [
        {
            "spime": {
                "name": "LED Sign",
                "description": "sdaklfjsdfjsdlkfdf ",
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
                "description": "sdaklfjsdfjsdlkfdf ",
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
                "-name": "Nerf Gun",
                "description": "sdaklfjsdfjsdlkfdf ",
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