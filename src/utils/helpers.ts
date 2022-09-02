import { IEmployerObject, ISortByValues } from './types';

export const sortEmployers = (data: Array<IEmployerObject>, selectSortFilterBy: string, selectSort: string) => {
    return selectSort === 'asc'
        ? data?.sort(
              (a: IEmployerObject, b: IEmployerObject) =>
                  Number(a[selectSortFilterBy as keyof ISortByValues] === null) -
                      Number(b[selectSortFilterBy as keyof ISortByValues] === null) ||
                  ('' + a[selectSortFilterBy as keyof ISortByValues]).localeCompare(
                      b[selectSortFilterBy as keyof ISortByValues],
                  ),
          )
        : data.sort(
              (a: IEmployerObject, b: IEmployerObject) =>
                  Number(b[selectSortFilterBy as keyof ISortByValues] === null) -
                      Number(a[selectSortFilterBy as keyof ISortByValues] === null) ||
                  ('' + b[selectSortFilterBy as keyof ISortByValues]).localeCompare(
                      a[selectSortFilterBy as keyof ISortByValues],
                  ),
          );
};

export const filterEmployers = (data: Array<IEmployerObject>, selectSortFilterBy: string, filterValue: string) =>
    data.filter((employer) =>
        employer[selectSortFilterBy as keyof ISortByValues]?.toLowerCase().includes(filterValue.toLowerCase()),
    );

export const addCityObject = (data: Array<IEmployerObject>) =>
    data.map((employer) => {
        return { ...employer, ...{ city: employer.address.city } };
    });
