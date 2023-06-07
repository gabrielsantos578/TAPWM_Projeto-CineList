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

    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [produtora, setProdutora] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [status, setStatus] = useState('');
    const [valor, setValor] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [atores, setAtores] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [key, setKey] = useState('');


    //implementação dos métodos update ou insert 

    async function insertUpdate() {

        //editar dados 

        if (titulo !== '' & 
            genero !== '' & 
            produtora !== '' & 
            sinopse !== '' & 
            status !== '' & 
            valor !== '' & 
            dataLancamento !== '' & 
            atores !== '' & 
            avaliacao !== '' & 
            key !== '') {

            firebase.database().ref('produto').child(key).update({

                titulo: titulo,
                genero: genero,
                produtora: produtora,
                sinopse: sinopse,
                status: status,
                valor: valor,
                dataLancamento: dataLancamento,
                atores: atores,
                avaliacao: avaliacao

            })

            Keyboard.dismiss(); //para o teclado do celular

            alert('Produto Editado!');

            clearFields();

            setKey('');

            return;

        }

        //cadastrar dados 

        let produto = await firebase.database().ref('produto');

        let chave = produto.push().key; //comando para salvar é o push 



        produto.child(chave).set({

            titulo: titulo,
            genero: genero,
            produtora: produtora,
            sinopse: sinopse,
            status: status,
            valor: valor,
            dataLancamento: dataLancamento,
            atores: atores,
            avaliacao: avaliacao

        });

        Keyboard.dismiss();

        alert('Produto Cadastrado!');

        clearFields();

    }

    //Método para limpar os campos com valores
    function clearFields() {
        setTitulo('');
        setGenero('');
        setProdutora('');
        setSinopse('');
        setStatus('');
        setValor('');
        setDataLancamento('');
        setAtores('');
        setAvaliacao('');
    }


    return (

        <View style={styles.container}>

            <TextInput

                placeholder='Título'

                left={<TextInput.Icon icon="filmstrip" />}

                maxLength={40}

                style={styles.input}

                onChangeText={(texto) => setTitulo(texto)}

                value={titulo}

            />

            <TextInput

                placeholder='Gênero'

                left={<TextInput.Icon icon="void" />}

                style={styles.input}

                onChangeText={(texto) => setGenero(texto)}

                value={genero}

            />

            <TextInput

                placeholder='Produtora'

                left={<TextInput.Icon icon="file-document-outline" />}

                style={styles.input}

                onChangeText={(texto) => setProdutora(texto)}

                value={produtora}

            />

            <TextInput

                placeholder='Sinopse'

                left={<TextInput.Icon icon="file-document" />}

                style={styles.input}

                onChangeText={(texto) => setSinopse(texto)}

                value={sinopse}

            />

            <TextInput

                placeholder='Status'

                left={<TextInput.Icon icon="file-document-outline" />}

                style={styles.input}

                onChangeText={(texto) => setStatus(texto)}

                value={status}

            />

            <TextInput

                placeholder='Valor'

                left={<TextInput.Icon icon="cash" />}

                style={styles.input}

                onChangeText={(texto) => setValor(texto)}

                value={valor}

            />

            <TextInput

                placeholder='Data Lançamento'

                left={<TextInput.Icon icon="calendar" />}

                style={styles.input}

                onChangeText={(texto) => setDataLancamento(texto)}

                value={dataLancamento}

            />

            <TextInput

                placeholder='Atores'

                left={<TextInput.Icon icon="account-star" />}

                style={styles.input}

                onChangeText={(texto) => setAtores(texto)}

                value={atores}

            />

            <TextInput

                placeholder='Avaliação'

                left={<TextInput.Icon icon="star" />}

                style={styles.input}

                onChangeText={(texto) => setAvaliacao(texto)}

                value={avaliacao}

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