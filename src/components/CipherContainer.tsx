import React, {ChangeEvent, useState} from "react";
import {improvedCaesarDecrypt} from "../utils/ciphers/caesar";
import {useParams} from "react-router-dom";
import {tarabarskayaRuDecrypt} from "../utils/ciphers/tarabarskaya";
import {prisonAlphabetDecrypt} from "../utils/ciphers/prisonAlphabet";
import {pairDecrypt} from "../utils/ciphers/pair";
import {viginerDecrypt} from "../utils/ciphers/viginer";
import {routeTransportationDecrypt} from "../utils/ciphers/routeTransportation";
import {columnTransportationDecrypt} from "../utils/ciphers/columnTransportation";

export const CipherContainer = () => {
    const eng = 'abcdefghijklmnopqrstuvwxyz'
    const ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const ru30letters = 'абвгдежзиклмнопрстуфхцчшщыьэюя'

    const [cipherText, setCipherText] = useState('')
    const [keyText, setKeyText] = useState('')
    const handleCipherTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCipherText(e.target.value)
    }
    const handleKeyTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyText(e.target.value)
    }

    const {cipher} = useParams()
    let cipherFunction = () : string => '';
    let hasKey = false;
    switch (cipher) {
        case 'caesar':
            cipherFunction = () => improvedCaesarDecrypt(cipherText, keyText, ru)
            hasKey = true;
            break;
        case 'tarabarskaya':
            cipherFunction = () => tarabarskayaRuDecrypt(cipherText)
            hasKey = false;
            break;
        case 'prison':
            cipherFunction = () => prisonAlphabetDecrypt(cipherText, ru30letters)
            hasKey = false;
            break;
        case 'pair':
            cipherFunction = () => pairDecrypt(cipherText, keyText, ru30letters)
            hasKey = true;
            break;
        case 'viginer':
            cipherFunction = () => viginerDecrypt(cipherText, keyText, ru)
            hasKey = true;
            break;
        case 'routeTransportation':
            cipherFunction = () => routeTransportationDecrypt(cipherText, keyText, ru)
            hasKey = true;
            break;
        case 'columnTransportation':
            cipherFunction = () => columnTransportationDecrypt(cipherText, keyText, ru)
            hasKey = true;
            break;
        case 'viginer30':
            cipherFunction = () => viginerDecrypt(cipherText, keyText, ru30letters)
            hasKey = true;
            break;
    }

    return (
        <div className="box">
            <label htmlFor="cipher">
                Текст для расшифровки:
                <textarea id="cipher" onChange={handleCipherTextChange}/>
            </label>
            {hasKey && <label htmlFor="key">
                Ключ:
                <input id="key" type="text" onChange={handleKeyTextChange}/>
            </label>}
            <button type='button' onClick={() => alert(cipherFunction())}>Шифровать</button>
        </div>
    );
};