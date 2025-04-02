import {colors} from "./colors";

export const defaultStyles = {
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor: colors.white,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.absoluteWhite,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: colors.black
    }

}