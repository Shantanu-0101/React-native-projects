import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
    name : string;
}>

const  icons = ({name} : IconProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={28}
            color="#F7CD2E"/>            
            break;
        case 'cross':
            return <Icon name="times" size={28} color="#0D0D"/>            
            break;
    
        default:
            return <Icon name="pencil" size={28} color="#0D0D0D"/>            

    }
 
}

export default icons