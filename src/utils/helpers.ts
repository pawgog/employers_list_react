import { IEmployerObject, ISortByValues } from './types';

export const sortEmployers = (data: Array<IEmployerObject>, selectSortFilterBy: string, selectSort: string) => {
    return selectSort === 'asc'
        ? data.sort((a: IEmployerObject, b: IEmployerObject) => {
              console.log(a, b);
              return a[selectSortFilterBy as keyof ISortByValues].localeCompare(
                  b[selectSortFilterBy as keyof ISortByValues],
              );
          })
        : data.sort((a: IEmployerObject, b: IEmployerObject) =>
              b[selectSortFilterBy as keyof ISortByValues].localeCompare(a[selectSortFilterBy as keyof ISortByValues]),
          );
};
