import React, { useState, useEffect, useRef } from 'react';

import {

    View, Text, StyleSheet,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper';

export default function GerenciarProdutos() {

    const [titulo, setTitulo] = userState('');
    const [tipo, setTipo] = userState('');
    const [produtora, setProdutora] = userState('');
    const [sinopse, setSinopse] = userState('');
    const [status, setStatus] = userState('');
    const [valor, setValor] = userState('');
    const [dataLancamento, setDataLancamento] = userState('');
    const [atores, setAtores] = userState('');
    const [avaliacao, setAvaliacao] = userState('');
    const [cor, setCor] = userState('');
    const [key, setKey] = userState('');

    return (

        <View style={styles.container}>

            <TextInput

                placeholder='Título'

                left={<TextInput.Icon icon="car" />}

                maxLength={40}

                style={styles.input}

                onChangeText={(texto) => setTitulo(texto)}

                value={name}

            />

            <TextInput

                placeholder='Tipo'

                left={<TextInput.Icon icon="sale" />}

                style={styles.input}

                onChangeText={(texto) => setTipo(texto)}

                value={brand}

            />

            <TextInput

                placeholder='Produtora'

                left={<TextInput.Icon icon="sack" />}

                style={styles.input}

                onChangeText={(texto) => setProdutora(texto)}

                value={price}

            />

            <TextInput

                placeholder='Sinopse'

                left={<TextInput.Icon icon="sack" />}

                style={styles.input}

                onChangeText={(texto) => setSinopse(texto)}

                value={price}

            />

            <TextInput

                placeholder='Status'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setStatus(texto)}

                value={color}

            />

            <TextInput

                placeholder='Valor'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setValor(texto)}

                value={color}

            />

            <TextInput

                placeholder='Date Lançamento'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setDataLancamento(texto)}

                value={color}

            />

            <TextInput

                placeholder='Atores'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setAtores(texto)}

                value={color}

            />

            <TextInput

                placeholder='Avaliação'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setAvaliacao(texto)}

                value={color}

            />

            <TextInput

                placeholder='Cor'

                left={<TextInput.Icon icon="color" />}

                style={styles.input}

                onChangeText={(texto) => setCor(texto)}

                value={color}

            />

        </View>

    );

}