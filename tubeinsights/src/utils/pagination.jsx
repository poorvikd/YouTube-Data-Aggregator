// Desc: Pagination component for the table. It takes the page, pageCount, batch and handlePageChange as props and renders the pagination component.

import React, { Component } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            pageCount: this.props.pageCount,
        }
    }

    render() {
        if (this.props.batch) {
            return (
                <Stack spacing={2}>
                    <Pagination count={this.state.pageCount} page={this.state.page} onChange={this.props.handlePageChange} />
                </Stack>
            );
        } else {
            return (
                <div></div>
            );

        }
    }
}

export default PaginationComponent;