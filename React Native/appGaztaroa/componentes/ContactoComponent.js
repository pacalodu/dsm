import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { contacto } from '../comun/contacto';

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Divider/>
                    <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Contacto extends Component {

    constructor(props) {
        super(props);
        this.state = {
          contacto: contacto
        };
    }

    render() {
        
        return(
            <ScrollView>
                <RenderItem item={this.state.contacto.filter((contacto) => contacto.destacado)[0]} />
            </ScrollView>
        );
    }
}

export default Contacto;
