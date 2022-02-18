
const ManifestXml = {      
        content: `<?xml version="1.0"?>
        <rdf:RDF xmlns="urn:webprotege:ontology:8e1b6d76-fa31-4674-b381-5afe34c40c4e#"
            xml:base="urn:webprotege:ontology:8e1b6d76-fa31-4674-b381-5afe34c40c4e"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:owl="http://www.w3.org/2002/07/owl#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:xml="http://www.w3.org/XML/1998/namespace"
            xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
            xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
            <owl:Ontology rdf:about="urn:webprotege:ontology:8e1b6d76-fa31-4674-b381-5afe34c40c4e"/>
            


            <!-- 
            ///////////////////////////////////////////////////////////////////////////////////////
            //
            // Annotation properties
            //
            ///////////////////////////////////////////////////////////////////////////////////////
            -->

            


            <!-- http://purl.org/dc/elements/1.1/title -->

            <owl:AnnotationProperty rdf:about="http://purl.org/dc/elements/1.1/title"/>
            


            <!-- http://purl.org/dc/elements/1.1/type -->

            <owl:AnnotationProperty rdf:about="http://purl.org/dc/elements/1.1/type"/>
            


            <!-- 
            ///////////////////////////////////////////////////////////////////////////////////////
            //
            // Classes
            //
            ///////////////////////////////////////////////////////////////////////////////////////
            -->

            


            <!-- http://webprotege.stanford.edu/R711abzVtjImou8JUKQStWk -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R711abzVtjImou8JUKQStWk">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecificRequirement</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecificRequirement</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R71kbMjCbibM7qJuAKm1Spk -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R71kbMjCbibM7qJuAKm1Spk">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Type</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Type</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70">
                <dc:title xml:lang="en">Metadata</dc:title>
                <rdfs:label>OBAA</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7ASOlvKNBJcCsDawkTLmDb -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7ASOlvKNBJcCsDawkTLmDb">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecificLocation</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecificLocation</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">MetaMetadata</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MetaMetadata</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7kO2UenGK4TZwKuCioB1fP -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7kO2UenGK4TZwKuCioB1fP">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq"/>
                <dc:title xml:lang="en">MetadataSchema</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MetadataSchema</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7mHSwSg9Q1t5lD7jf3S0mY -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7mHSwSg9Q1t5lD7jf3S0mY">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Size</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Size</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7mlPTpDfo0cnFU77eTtUJC -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7mlPTpDfo0cnFU77eTtUJC">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9CDzWkM96oOnr6fHBMpcvt"/>
                <dc:title xml:lang="en">Input</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Input</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7tBlYMANgk5KkGG16ZsSR0 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7tBlYMANgk5KkGG16ZsSR0">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2"/>
                <dc:title xml:lang="en">Purpose</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Purpose</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7uWOMUWdwLVA94rf4oiAal -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7uWOMUWdwLVA94rf4oiAal">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">IntendedEndUserRole</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">IntendedEndUserRole</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R7zFs9SN2FHMxyvKgWw7qy -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R7zFs9SN2FHMxyvKgWw7qy">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDA0Z8YV1Qkc4zItFLsq1q"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDv8paDeMUF03Re8ljfnaS3"/>
                <dc:title xml:lang="en">Entity</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Entity</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R816srlG39mJi4P07QW63zn -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R816srlG39mJi4P07QW63zn">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo"/>
                <dc:title xml:lang="en">CopyrightAndOtherRestrictions</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">CopyrightAndOtherRestrictions</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R82xt2pluVHXtg4IomzaDuO -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R82xt2pluVHXtg4IomzaDuO">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecificOtherPlatformRequeriments</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecificOtherPlatformRequeriments</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8Jqenn8ncLGj4fwWQcRpjA -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8Jqenn8ncLGj4fwWQcRpjA">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Provides</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Provides</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8L9uizq6QskkAcDSL10cjp -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8L9uizq6QskkAcDSL10cjp">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Protocol</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Protocol</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8W4UtnQFZqrWzppmAbffBL -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8W4UtnQFZqrWzppmAbffBL">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">AggregationLevel</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>AggregationLevel</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8Xa4xx06i6Xb7Mye4U3R1c -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8Xa4xx06i6Xb7Mye4U3R1c">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">SupportedPlatform</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SupportedPlatform</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8ZDnQ1FcJBq7cB6Q3JvEp9 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8ZDnQ1FcJBq7cB6Q3JvEp9">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBaeHtT4FO8GstNC436e6A9"/>
                <dc:title xml:lang="en">Kind</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Kind</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8aj4XoslYap0gERB2AJW48 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8aj4XoslYap0gERB2AJW48">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDA0Z8YV1Qkc4zItFLsq1q"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDv8paDeMUF03Re8ljfnaS3"/>
                <dc:title xml:lang="en">Date</dc:title>
                <dc:type xml:lang="en">Date</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Date</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R8pIDFYhKQO6cSYwaCVT8My -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R8pIDFYhKQO6cSYwaCVT8My">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">DidaticStrategy</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">DidaticStrategy</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R97su7IYa0HKIM7s2IWlMfD -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R97su7IYa0HKIM7s2IWlMfD">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Structure</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>Structure</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9BCgh3HlMFbRmFXg9ijaP8 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9BCgh3HlMFbRmFXg9ijaP8">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Requirements</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Requirements</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9CDzWkM96oOnr6fHBMpcvt -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9CDzWkM96oOnr6fHBMpcvt">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDw1aefSgCwu9nYzN8wBz1y"/>
                <dc:title xml:lang="en">Identifier</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Identifier</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9DQnZ64Q8MPIFiiwIv9s3h -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9DQnZ64Q8MPIFiiwIv9s3h">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Coverage</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>Coverage</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9I68lcksfW1alQWDsUkleK -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9I68lcksfW1alQWDsUkleK">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">OtherPlatformRequirements</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">OtherPlatformRequirements</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Technical</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Technical</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9mVkqMm6BDUqB7LdU8q3Hq -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9mVkqMm6BDUqB7LdU8q3Hq">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9CDzWkM96oOnr6fHBMpcvt"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDA0Z8YV1Qkc4zItFLsq1q"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo"/>
                <dc:title xml:lang="en">Description</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Description</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9t4qIEPduSb44CY5I0M7zW -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9t4qIEPduSb44CY5I0M7zW">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo"/>
                <dc:title xml:lang="en">Cost</dc:title>
                <dc:type xml:lang="en">number</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Cost</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/R9vU5RonJBJdd6ImN8DKerL -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/R9vU5RonJBJdd6ImN8DKerL">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">HasTactile</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HasTactile</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RB69tqCKvMWgJklN7vbgr6g -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RB69tqCKvMWgJklN7vbgr6g">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RlDVIzXNs6gDGgadKOQxpv"/>
                <dc:title xml:lang="en">Version</dc:title>
                <dc:type xml:lang="en">number</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Version</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RB8jE5GhTRg6SXv2aVgIhWP -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RB8jE5GhTRg6SXv2aVgIhWP">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RlDVIzXNs6gDGgadKOQxpv"/>
                <dc:title xml:lang="en">Status</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Status</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBTVFzsBRtuJXhJ4G9AdsgY -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBTVFzsBRtuJXhJ4G9AdsgY">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2"/>
                <dc:title xml:lang="en">TaxonPath</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TaxonPath</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBVPTf6L3so5GPtF78PWpac -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBVPTf6L3so5GPtF78PWpac">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">PlatformType</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PlatformType</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBWs8BA2xxjO3dk7QFKwRRE -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBWs8BA2xxjO3dk7QFKwRRE">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9CDzWkM96oOnr6fHBMpcvt"/>
                <dc:title xml:lang="en">Catalog</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Catalog</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBaeHtT4FO8GstNC436e6A9 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBaeHtT4FO8GstNC436e6A9">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Relation</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Relation</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBgX8222IOVkjrtKfn4T0DB -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBgX8222IOVkjrtKfn4T0DB">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Essential</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Essential</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBkj4tOHXnoyoxTh3W9jJXH -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBkj4tOHXnoyoxTh3W9jJXH">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo"/>
                <dc:title xml:lang="en">OtherRestrictions</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">OtherRestrictions</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">General</dc:title>
                <rdfs:label>General</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBlwI6M2NoThYGxAIJFlQy1 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBlwI6M2NoThYGxAIJFlQy1">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">InstallationRemarks</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">InstallationRemarks</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBv8uLokUgve4dOrLhnd7xi -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBv8uLokUgve4dOrLhnd7xi">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9BCgh3HlMFbRmFXg9ijaP8"/>
                <dc:title xml:lang="en">OrComposite</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">OrComposite</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Acessibility</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Acessibility</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RC46I2Y7dYFgZBfLDLeZc1N -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RC46I2Y7dYFgZBfLDLeZc1N">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">EarlStatement</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EarlStatement</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RC6cluCzD2ZYn4sBqK0JrbK -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RC6cluCzD2ZYn4sBqK0JrbK">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">Context</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Context</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCAYgM35yzhnmRBKJIwp0fA -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCAYgM35yzhnmRBKJIwp0fA">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">Language</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Language</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">PlatformSpecificFeatures</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PlatformSpecificFeatures</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCJnoPCD7BLq1OY6gEb4R6g -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCJnoPCD7BLq1OY6gEb4R6g">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Keyword</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>Keyword</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCM9Ryncnty4ZY9BF2zS0YL -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCM9Ryncnty4ZY9BF2zS0YL">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">InteractivityLevel</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">InteractivityLevel</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCNkL3DVZWdP4xt5UE4IZjZ -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCNkL3DVZWdP4xt5UE4IZjZ">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecificInstallationRemarks</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecificInstallationRemarks</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCSRpODZSVktjpR1mFZvBZw -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCSRpODZSVktjpR1mFZvBZw">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Format</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Format</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCaYoxMuzg6ux0dwJSmjz4I -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCaYoxMuzg6ux0dwJSmjz4I">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Location</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Location</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RCpPWNfcl4CycghAQP23FOx -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RCpPWNfcl4CycghAQP23FOx">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">HasVisual</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HasVisual</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RD0f3w3lxyU8xb90i3ygvoL -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RD0f3w3lxyU8xb90i3ygvoL">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Ontology</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Ontology</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDA0Z8YV1Qkc4zItFLsq1q -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDA0Z8YV1Qkc4zItFLsq1q">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Annotation</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Annotation</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDB53EBUb3EbKlS06iVLYqm -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDB53EBUb3EbKlS06iVLYqm">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Details</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Details</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Service</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Service</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDG7ErQXWFh4CVd1SrqIiI8 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDG7ErQXWFh4CVd1SrqIiI8">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R9VB3XHgv9FGLHjIG7mRYmp"/>
                <dc:title xml:lang="en">Duration</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Duration</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDKBBhDYqOUnzQUXj4I7o9U -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDKBBhDYqOUnzQUXj4I7o9U">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2"/>
                <dc:title xml:lang="en">Keyword</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Keyword</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDKaOfYVL31DH7qjWtrDQ6s -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDKaOfYVL31DH7qjWtrDQ6s">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RffumbrNvMemzRECB4tDAw"/>
                <dc:title xml:lang="en">SegmentList</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SegmentList</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDO4Nctwvgc8QXGc7F5quQk -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDO4Nctwvgc8QXGc7F5quQk">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecifSize</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecifSize</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDO7eXTvEz7ueHCo2fNKBqb -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDO7eXTvEz7ueHCo2fNKBqb">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">InteractivityType</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">InteractivityType</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Educational</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Educational</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDXppf8izQszPjtQjDJoEHZ -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDXppf8izQszPjtQjDJoEHZ">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">EquivalentResource</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EquivalentResource</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDhye4Gc8PK8c4o3rY302G2">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Classification</dc:title>
                <rdfs:label>Classification</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDv8paDeMUF03Re8ljfnaS3 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDv8paDeMUF03Re8ljfnaS3">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R7QsvOB1oGcBpp2MvcLXgqq"/>
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RlDVIzXNs6gDGgadKOQxpv"/>
                <dc:title xml:lang="en">Contribute</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Contribute</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDw1aefSgCwu9nYzN8wBz1y -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDw1aefSgCwu9nYzN8wBz1y">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBaeHtT4FO8GstNC436e6A9"/>
                <dc:title xml:lang="en">Resource</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Resource</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RDxRq3hxNjfZMCSanN6fzGQ -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RDxRq3hxNjfZMCSanN6fzGQ">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">Difficulty</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Difficulty</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RH6R3IZb1MU6AKiqUdV3gj -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RH6R3IZb1MU6AKiqUdV3gj">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDv8paDeMUF03Re8ljfnaS3"/>
                <dc:title xml:lang="en">Role</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Role</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RIH65kvzQmnwWYgePdAGYt -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RIH65kvzQmnwWYgePdAGYt">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Description</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>Description</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RIte7relVDRBF1pDXLgDXH -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RIte7relVDRBF1pDXLgDXH">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">LearningContentType</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">LearningContentType</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RJiyCqSMpC8e1pA2DnM9SC -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RJiyCqSMpC8e1pA2DnM9SC">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">SemanticDensity</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SemanticDensity</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RKxmybtvgG6VOXYKYPOrpE -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RKxmybtvgG6VOXYKYPOrpE">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">TypicalLearningTime</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TypicalLearningTime</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RLDuxwIbAPN5NABKgFQ5Lc -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RLDuxwIbAPN5NABKgFQ5Lc">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RffumbrNvMemzRECB4tDAw"/>
                <dc:title xml:lang="en">SegmentGroupList</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SegmentGroupList</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RLhpvt8kauEqNBoOgbmUkD -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RLhpvt8kauEqNBoOgbmUkD">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">HasText</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HasText</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RLt5a18NVx8Cpl2zuo6jP7 -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RLt5a18NVx8Cpl2zuo6jP7">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RCJOOdACRuixtaBcVvYJozP"/>
                <dc:title xml:lang="en">SpecificFormat</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SpecificFormat</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RNsiRXzNUigqHbBvKSDkhg -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RNsiRXzNUigqHbBvKSDkhg">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">LearningResourceType</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">LearningResourceType</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RdMvHRUMcvTbt0HeqJVMRC -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RdMvHRUMcvTbt0HeqJVMRC">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Title</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Title</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RehvsSiWWq9aQVLNc1Y1mm -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RehvsSiWWq9aQVLNc1Y1mm">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBlTmR0KwZw58KaFor9Z9tu"/>
                <dc:title xml:lang="en">Language</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label>Language</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RffumbrNvMemzRECB4tDAw -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RffumbrNvMemzRECB4tDAw">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">SegmentInformationTable</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SegmentInformationTable</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RjST1RoPQ2bDCTINJd4OeS -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RjST1RoPQ2bDCTINJd4OeS">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">TypicalAgeRange</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TypicalAgeRange</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/Rkm5J5Eq2zPocdPLMfruGo">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">Rights</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Rights</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RkvRGsedky5cBFitu832uo -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RkvRGsedky5cBFitu832uo">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RBxmTndXrUpcah44lK5TpsR"/>
                <dc:title xml:lang="en">HasAudititory</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HasAudititory</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RlDVIzXNs6gDGgadKOQxpv -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RlDVIzXNs6gDGgadKOQxpv">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/R721bhkPVW6bxJvAMiiFa70"/>
                <dc:title xml:lang="en">LifeCycle</dc:title>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">LifeCycle</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RpBDFJbqqICwpF4g5XzFjt -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RpBDFJbqqICwpF4g5XzFjt">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDVyBunTrmNVYFdpa6I2oSp"/>
                <dc:title xml:lang="en">Interaction</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Interaction</rdfs:label>
            </owl:Class>
            


            <!-- http://webprotege.stanford.edu/RztIW41R24rh7Kw1HFr5Of -->

            <owl:Class rdf:about="http://webprotege.stanford.edu/RztIW41R24rh7Kw1HFr5Of">
                <rdfs:subClassOf rdf:resource="http://webprotege.stanford.edu/RDCXa2KVfhMT5o3Z3YPZP90"/>
                <dc:title xml:lang="en">Name</dc:title>
                <dc:type xml:lang="en">string</dc:type>
                <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Name</rdfs:label>
            </owl:Class>
        </rdf:RDF>



        <!-- Generated by the OWL API (version 4.5.13) https://github.com/owlcs/owlapi -->
    `
}

export default ManifestXml
