import styled from 'styled-components'

const ImageWrapper = styled.div`
    max-width: ${props => props.width};
`
export const ImageFixedWrapper = styled.div`
    width: ${props => props.width};
`

export default ImageWrapper
