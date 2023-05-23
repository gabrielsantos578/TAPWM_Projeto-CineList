import React, { useState, useEffect, useRef } from 'react';

import {

    View, Text, StyleSheet, Button,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase';

/*

const Separator = () => {
    return <View style={styles.separator} />;
}

<Separator /> após cada TextInput

*/

export default function GerenciarProdutos() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState('');
    const [cor, setCor] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (nome !== '' & marca !== '' & preco !== '' & cor !== '' & key !== '') {

            firebase.database().ref('produtos').child(key).update({

                nome: nome, marca: marca, preco: preco, cor: cor

            })

            Keyboard.dismiss(); //para o teclado do celular

            alert('Produto Editado!');

            clearFields();

            setKey('');

            return;

        }

        //cadastrar dados 

        let produtos = await firebase.database().ref('produtos');

        let chave = produtos.push().key; //comando para salvar é o push 



        produtos.child(chave).set({

            nome: nome,

            marca: marca,

            preco: preco,

            cor: cor

        });

        Keyboard.dismiss();

        alert('Produto Cadastrado!');

        clearFields();

    }

    //Método para limpar os campos com valores
    function clearFields() {
        setNome('');
        setMarca('');
        setPreco('');
        setCor('');
    }

    return (

        <View style={styles.container}>

            <TextInput

                placeholder='Nome'

                left={<TextInput.Icon icon="filmstrip" />}

                maxLength={40}

                style={styles.input}

                onChangeText={(texto) => setNome(texto)}

                value={nome}

            />

            <TextInput

                placeholder='Marca'

                left={<TextInput.Icon icon="void" />}

                style={styles.input}

                onChangeText={(texto) => setMarca(texto)}

                value={marca}

            />

            <TextInput

                placeholder='Preço'

                left={<TextInput.Icon icon="file-document-outline" />}

                style={styles.input}

                onChangeText={(texto) => setPreco(texto)}

                value={preco}

            />

            <TextInput

                placeholder='Cor'

                left={<TextInput.Icon icon="invert-colors" />}

                style={styles.input}

                onChangeText={(texto) => setCor(texto)}

                value={cor}

            />

            <View style={styles.button}>

                <Button

                    onPress={insertUpdate}

                    title="Salvar"

                    color="#DC143C"

                    accessibilityLabel=""

                />

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        margin: 10,

    },

    input: {

        borderWidth: 1,

        borderColor: '#A9A9A9',

        backgroundColor: '#FFFFFF',

        height: 40,

        fontSize: 13,

        borderRadius: 8,

        marginBottom: 10

    },

    separator: {

        marginVertical: 5,

    },

    button: {

        flexDirection: 'column',

        alignItems: 'center',

        textAlign: 'center',

        backgroundColor: '#DC143C',

        borderWidth: 0.5,

        borderColor: '#DC143C',

        height: 40,

        borderRadius: 5,

        margin: 5,

    },

    buttonImageIconStyle: {

        padding: 10,

        margin: 5,

        height: 25,

        width: 25,

        resizeMode: 'stretch',

    },

    buttonTextStyle: {

        color: '#fff',

        marginBottom: 4,

        marginLeft: 100,

        fontSize: 20

    },

    buttonIconSeparatorStyle: {

        backgroundColor: '#fff',

        width: 1,

        height: 20,

    },

    listar: {

        fontSize: 20,

        textAlign: 'center'

    }

}); 