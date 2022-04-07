import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { somos } from '../comun/somos';
import { ACTIVIDADES } from '../comun/actividades';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function RenderItem(props) {

    const item = props.item;

    if (item != null) {
        return (
            <Card>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 20 }}>
                    {item.descripcion}
                </Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class QuienesSomos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES,
            somos: somos
        };
    }

    render() {

        return (
            <ScrollView nestedScrollEnabled={true}>
                <RenderItem item={this.state.somos.filter((somos) => somos.destacado)[0]} />
                <Card>
                    <Card.Title>Actividades y recursos</Card.Title>
                    <Card.Divider />
                        {this.state.actividades.map((item, index) => (
                            <ListItem
                                key={index}>
                                <Avatar source={require('./imagenes/40Años.png')} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.nombre}</ListItem.Title>
                                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                </Card>
            </ScrollView>
        );
    }
}

export default QuienesSomos;