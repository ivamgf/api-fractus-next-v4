import React from 'react'
import ManifestXml from '../../data/manifest'
let convert = require('xml-js')

export default function Metadata(props: any) {
    let xml = ManifestXml.content
    let result = convert.xml2json(xml, {compact: true, spaces: 4})
    return (
        <>
            <div>{result}</div>
        </>        
    )
}