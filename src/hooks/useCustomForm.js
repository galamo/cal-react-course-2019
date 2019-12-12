import React, { useState } from "react"



export default function useCustomForm(initialState) {
    const [formData, setFormData] = useState(initialState)

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return [formData, onChangeInput]

}