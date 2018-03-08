import { StyleSheet } from 'react-native';

const grey = '#777';

export default StyleSheet.create({
    logoTextStyle: {
        fontSize: 28,
        fontFamily: 'Righteous',
        color: '#ffffff'
    },
    smallBlueTextStyle: {
        fontSize: 12,
        fontFamily: 'Righteous',
        color: '#2A4065'
    },
    xLargeTextStyle: {
        fontFamily: 'Ubuntu',
        fontSize: 48,
        color: '#ffffff'
    },
    largeTextStyle: {
        fontSize: 28,
        fontFamily: 'Ubuntu',
        color: '#ffffff'
    },
    mediumTextStyle: {
        fontSize: 20,
        fontFamily: 'Ubuntu',
        color: '#ffffff'
        
    },
    smallTextStyle: {
        fontFamily: 'Ubuntu',
        fontSize: 12,
        color: '#ffffff'
    },
    inputStyle: {
        backgroundColor: '#ffff',
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: 'Ubuntu',
        flex: 1,
        borderColor: grey,
        borderWidth: 2,
        borderRadius: 5
    },
    containerStyle: {
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    cardStyle: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    btnConfirm: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#2A4065',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#2A4065',
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
        fontSize: 16,
        alignSelf: 'center',
        color: '#fff',
        paddingTop: 10,
        paddingBottom: 10
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollViewStyle: {
        height: '100%'
    }
});
