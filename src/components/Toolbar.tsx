import React, { ReactNode } from 'react';
import { FormControl, InputLabel, TextField, Select, InputAdornment, SelectChangeEvent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormControlStyled, SelectFilterFadeAnimation } from './Toolbar.styled';
import { staticText } from '../utils/staticText';

interface IProps {
    filter: string;
    filterByFn: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    selectSortOrder: string;
    selectSortFilterBy: string;
    handleChangeSelectOrderFn: ((event: SelectChangeEvent<string>, child: ReactNode) => void) | undefined;
    handleChangeSelectByFn: ((event: SelectChangeEvent<string>, child: ReactNode) => void) | undefined;
}

const Toolbar = ({
    filter,
    filterByFn,
    selectSortOrder,
    selectSortFilterBy,
    handleChangeSelectOrderFn,
    handleChangeSelectByFn,
}: IProps) => {
    return (
        <>
            <FormControlStyled size="small" variant="outlined">
                <InputLabel htmlFor="select-sort-filter-data-label">{staticText.sortFilterBy}</InputLabel>
                <Select
                    native
                    id="select-sort-filter-data-label"
                    value={selectSortFilterBy}
                    onChange={handleChangeSelectByFn}
                    label={staticText.sortFilterBy}
                >
                    <option aria-label="None" value="" />
                    <option value="name">{staticText.nameValue}</option>
                    <option value="office">{staticText.officeValue}</option>
                </Select>
            </FormControlStyled>
            <SelectFilterFadeAnimation $fade={selectSortFilterBy !== '' ? true : false}>
                <TextField
                    id="searchBy"
                    placeholder={`${staticText.searchBy}${selectSortFilterBy}:`}
                    type="search"
                    size="small"
                    variant="outlined"
                    value={filter}
                    onChange={filterByFn}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="select-sort-data-label">{staticText.sortOrder}</InputLabel>
                    <Select
                        native
                        id="select-sort-data-label"
                        value={selectSortOrder}
                        onChange={handleChangeSelectOrderFn}
                        label={staticText.sortOrder}
                    >
                        <option aria-label="None" value="" />
                        <option value="asc">{staticText.asc}</option>
                        <option value="desc">{staticText.desc}</option>
                    </Select>
                </FormControl>
            </SelectFilterFadeAnimation>
        </>
    );
};

export default Toolbar;
