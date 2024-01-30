import {  SettingFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { FloatButton, Tooltip } from 'antd';
import { MdNightlightRound, MdLightMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { ColorPicker } from 'antd';
import { getColor, setColor } from '../../Hooks/useColor';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useChangeTheme } from '../../Hooks/useChangeTheme';

const FloatOption: React.FC = () => {
    const [PrimaryColor, setPrimaryColor] = useState(getColor("--primary"))
    const [SecondaryColor, setSecondaryColor] = useState(getColor("--secondary"))
    const { currentlanguage, changelanguage } = useChangeLanguage();
    const { currentTheme, changeTheme } = useChangeTheme();

    return (
        <FloatButton.Group
        trigger="hover"
            type="primary"
            icon={<SettingFilled />}
            className='FloatButton'
            style={
              currentlanguage === "en" ? { left: "30px" }:{  right: "30px"  }
            }
        >
            <Tooltip title="PrimaryColor" placement='rightTop'>
                <FloatButton icon={
                    <ColorPicker defaultValue={PrimaryColor} onChange={
                        (value: any) => {
                            setColor('--primary', value.toHexString());
                            setPrimaryColor(value.toHexString())

                        }
                    } size='small' />} />
            </Tooltip>

            <Tooltip title="SecondaryColor" placement='rightTop'>
                <FloatButton icon={
                    <ColorPicker defaultValue={SecondaryColor} onChange={
                        (value: any) => {
                            setColor('--secondary', value.toHexString());
                            setSecondaryColor(value.toHexString())

                        }
                    } size='small' />} />
            </Tooltip>
             <Tooltip title={ currentlanguage === "en" ? "Change to Arabic" : "Change to English"} placement='rightTop'>
                <FloatButton onClick={()=>{
                    currentlanguage === "en" ? changelanguage("ar")  : changelanguage("en")
                }} icon={<FaLanguage />} />
            </Tooltip>
            <Tooltip title={ currentTheme !== "light" ? "Change to LightMood" : "Change to DarkMood"} placement='rightTop'>
                <FloatButton onClick={()=>{
                    currentTheme === "light" ? changeTheme("dark")  : changeTheme("light")
                }} icon={ currentTheme !== "light" ?  <MdLightMode /> : <MdNightlightRound /> } />
            </Tooltip>
        </FloatButton.Group>
    );
}

export default FloatOption;