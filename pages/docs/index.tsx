import React from 'react'
import styled from 'styled-components'

import BasicCard from '../../components/card'
import content from '../../jsons/docsContent'

export default function Docs() {

    return (
       <Main>
           <BasicCard 
                title={content.title} 
                description={content.description}
                subTitle1={content.subTitle1}
                endpoint1={content.endpoint1}
                subTitle2={content.subTitle2}
                endpoint2={content.endpoint2}
                subTitle3={content.subTitle3}
                endpoint3={content.endpoint3}
                subTitle4={content.subTitle4}
                endpoint4={content.endpoint4}
                subTitle5={content.subTitle5}
                endpoint5={content.endpoint5}
                note={content.note}
            />
       </Main>
    )
}

const Main = styled.div`
    margin: 2em 2em;
`
