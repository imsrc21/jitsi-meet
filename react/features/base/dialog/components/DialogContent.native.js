// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { dialog as styles } from './styles';

type Props = {

    /**
     * Children of the component.
     */
    children: string | React$Node
};

/**
 * Generic dialog content container to provide the same styling for all custom
 * dialogs.
 */
export default class DialogContent extends Component<Props> {
    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { children } = this.props;

        const childrenComponent = typeof children === 'string'
            ? <Text>{ children }</Text>
            : children;

        return (
            <View style = { styles.dialogContainer }>
                { childrenComponent }
            </View>
        );
    }
}
