const TITLE = {
    name: 'title',
    config: {
        title: {
            text: 'This is a title',
            style: {
                textAlign: 'center',
                margin: 0
            }
        },
        subtitle: {
            text: 'This is a subtitle',
            style: {
                textAlign: 'center',
                margin: 0
            }
        },
        style: {
        }
    }
}

const TEXT = {
    name: 'text',
    config: {
        text: 'This is text',
        style: {
            textAlign: 'left'
        }
    }
}

const DIVIDER = {
    name: 'divider'
}

const BUTTON = {
    name: 'button',
    config: {
        buttons: [
            {
                text: 'Button',
                href: 'https://github.paypal.com/aduong',
                style: {
                    backgroundColor: 'red'
                },
            }
        ],
        style:{
            textAlign: 'center',
        },
        limit: 5
    }
}

const IMAGE = {
    name: 'image',
    config: {
        src: 'http://via.placeholder.com/600x200',
        style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    }
}

const IMAGE_TEXT_RIGHT = {
    name: 'imageTextRight',
    config: {
        image: {
            src: 'http://via.placeholder.com/300x200',
            style: {
                paddingLeft: 5,
                margin: 0,
                width: '50%',
            }
        },
        descript: {
            text: 'Enter text',
            style: {
                width: '50%'
            }
        },
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const IMAGE_TEXT_LEFT = {
    name: 'imageTextLeft',
    config: {
        image: {
            src: 'http://via.placeholder.com/300x200',
            style: {
                paddingRight: 5,
                margin: 0,
                width: '50%'
            }
        },
        descript: {
            text: 'Enter text',
            style: {
                width: '50%'
            }
        },
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const DOUBLE_IMAGE_TEXT = {
    name: 'doubleImageText',
    config: {
        options: [
            {
                image: {
                    src: 'http://via.placeholder.com/280x150',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'http://via.placeholder.com/280x150',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            }
        ],
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const TRIPLE_IMAGE_TEXT = {
    name: 'tripleImageText',
    config: {
        options: [
            {
                image: {
                    src: 'http://via.placeholder.com/180x100',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'http://via.placeholder.com/180x100',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'http://via.placeholder.com/180x100',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            }
        ],
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const LOCATION = {
    name: 'location',
    config: {
        street: '0000 test',
        state: '',
        country: '',
        style: {
            textAlign: 'center'
        }
    }
}

const BLANK = {
    name: 'blank'
}


export const builder = {
    components: [
        TITLE,
        TEXT,
        IMAGE,
        DIVIDER,
        BUTTON,
        LOCATION,
        IMAGE_TEXT_RIGHT,
        IMAGE_TEXT_LEFT,
        DOUBLE_IMAGE_TEXT,
        TRIPLE_IMAGE_TEXT,
        BLANK
    ]
}

