import React from 'react'
import ManifestXml from '../data/manifest'

describe('App Fractus - Metadata', () => {
    it('should return content function', () => {
        const contentXml = ManifestXml.content
        expect(contentXml).toContain('<?xml version="1.0"?>')
    })
})
