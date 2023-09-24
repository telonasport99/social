import React from "react";

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are u', likesCount: 3},
            {id: 2, message: 'ImFine', likesCount: 3},
        ]
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Tolya'},
            {id: 2, name: 'Vadim'}
        ],
        message: [
            {id: 1, message: '321'},
            {id: 2, message: '32'},
        ]
    }
}