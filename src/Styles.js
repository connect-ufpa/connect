import { StyleSheet } from 'react-native';

const grey = '#777';

export default StyleSheet.create({
    imageStyle: {
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: '#ffff',
        paddingLeft: 20,
        fontSize: 18,
        fontFamily: 'Ubuntu',
        flex: 1,
        borderColor: grey,
        borderWidth: 2,
        borderRadius: 5   
    },
    containerStyle: {
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    cardStyle: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    btnConfirm: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#2BA3DA',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#2BA3DA',
        elevation: 4
    },
    btnCancel: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#CC2820',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#CC2820',
        elevation: 4
    },
    btnTextStyle: {
        fontFamily: 'Ubuntu',
        fontSize: 24,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#ffff',
        paddingTop: 10,
        paddingBottom: 10
    }
});