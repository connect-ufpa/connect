import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    logoTextStyle: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 28,
        color: '#ffffff'
    },
    smallBlueTextStyle: {
        fontFamily: 'Ubuntu',
        fontSize: 12,
        color: '#2A4065'
    },
    xLargeTextStyle: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 48,
        color: '#ffffff'
    },
    largeTextStyle: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 28,
        color: '#ffffff'
    },
    mediumTextStyle: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 20,
        color: '#ffffff'
    },
    smallTextStyle: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 12,
        color: '#ffffff'
    },
    inputStyle: {
        flex: 1,
        elevation: 4,
        padding: 11.5,
        borderRadius: 5,
        paddingLeft: 20,
        color: '#2D2D2D',
        borderColor: '#FFF',
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    containerStyle: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cardStyle: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    btnConfirm: {
        flex: 1,
        padding: 5,
        elevation: 4,
        borderWidth: 2,
        borderRadius: 5,
        alignSelf: 'stretch',
        borderColor: '#2A4065',
        backgroundColor: '#2A4065',
    },
    btnCancel: {
        flex: 1,
        elevation: 4,
        borderWidth: 2,
        borderRadius: 5,
        alignSelf: 'stretch',
        borderColor: '#CC2820',
        backgroundColor: '#CC2820',

    },
    btnTextStyle: {
        fontFamily: 'Ubuntu-Medium',
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
        height: '100%',
    },    
    modalScrollViewStyle: {
        height: '100%',
        marginBottom: 20,
        marginTop: 75
    },
    mapStyle: {
        height: 300,
        width: '100%'
    },
    mapLocalizacaoStyle: {
        height: height - 80,
        width: '100%'
    },
    eventCardStyle: {
        elevation: 8,
        backgroundColor: '#ffff',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    searchBarStyle: {
        flex: 1,
        padding: 20,
        width: '100%',
        position: 'absolute'
    },
    iconInsideSearchBarStyle: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        borderRadius: 50,
        marginRight: 5
    },
    iconButtomStyle: {
        height: 60,
        width: 60,
        margin: 15,
        elevation: 8,
        borderRadius: 150,
        alignContent: 'center',
        justifyContent: 'center'
    },
    viewListItensFoundStyle: {
        flex: 1,
        zIndex: 1,
        position: 'absolute',
        marginTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 8,
        width: '100%'
    },
    flatListStyle: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderWidth: 2,
        borderColor: '#2A4065'
    },
    backgroudTextFlatListStyle: {
        flex: 1,
        flexDirection: 'row',
        borderTopColor: '#777',
        borderTopWidth: 2,
        backgroundColor: 'white'
    },
    textFlatListStyle: {
        flex: 1,
        color: '#777',
        fontSize: 12,
        margin: 5,
        height: 40,
        paddingTop: 7,
        paddingLeft: 5
    },
    buttomCloseStyle: {
        height: 30,
        width: 30,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#CC2820',
        alignContent: 'center',
        justifyContent: 'center',
    },
    cardHelperStyle: {
        elevation: 8,
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 130,
        zIndex: 1,
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 10,
    },
    dicaTextStyle: {
        flex: 5,
        fontFamily: 'Ubuntu',
        textAlign: 'center',
        fontSize: 14,
        color: '#2BA3DA',
        marginLeft: 20,
        paddingTop: 5,
    }, 
    textCardHelperStyle: {
        flex: 4,
        fontSize: 11,
        padding: 5,
        fontFamily: 'Ubuntu',
        color: '#777',
        textAlign: 'center',
    }
});
