import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      actividades: state.actividades
    }
  }

function UnPocoDeHistoria(){
    return (
        <Card>
            <Card.Title>Un poco de historia</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 20 }}>
                El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.
                Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.
                {"\n\n"}
                Gracias!
                {"\n\n"}
                Kaixo Mendizale!
            </Text>
        </Card>
    );
}
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

    render() {

        return (
            <ScrollView>
                <UnPocoDeHistoria/>
                <Card>
                    <Card.Title>Actividades y recursos</Card.Title>
                    <Card.Divider />
                    {this.props.actividades.actividades.map((item, index) => (
                        <ListItem
                            key={index}>
                            <Avatar source={{uri: baseUrl + item.imagen}} />
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

export default connect(mapStateToProps)(QuienesSomos);