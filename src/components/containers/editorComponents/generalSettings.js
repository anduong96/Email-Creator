import React from 'react'
import { Button } from 'antd'
import { FormWrapper } from './form'
import { ColorPicker, ColorButtonSettings } from '../colorPicker'

export const GeneralSettings = ({
    canvasStyle,
    onChangeCanvasStyle
}) => (
    <FormWrapper label={'Background Color'}>
        <ColorPicker
            onChange={(color) => onChangeCanvasStyle({ backgroundColor: color.hex })}
            color={canvasStyle.backgroundColor}
        >
            <Button style={{ ...canvasStyle, ...ColorButtonSettings }} />
        </ColorPicker>
    </FormWrapper>
)
