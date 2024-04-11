import React, {Component} from 'react';

export default class MailTo extends Component {

    render() {
        return (
                <div>
                    <ul>
                        <li data-ta="mailto-user">
                            <a href='mailto:testUser@mail.com'>Test User 1</a>
                        </li>
                        <li data-ta="mailto-user">
                            <a href='mailto:test@mail.com'>Test User 2</a>
                        </li>
                        <li data-ta="mailto-user">
                            <a href='mailto:broken_test@mail'>Broken</a>
                        </li>
                        <li data-ta="mailto-user">
                            <a href='mailto:test@mail.com?cc=test2@mail.com'>Test User With cc</a>
                        </li>
                    </ul>
                </div>
        );
    }
}