import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  weak: string;
  class: string;
  strong: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {class: 'Saber', weak: 'Archer', strong: 'Lancer'},
  {class: 'Archer', weak: 'Lancer', strong: 'Saber'},
  {class: 'Lancer', weak: 'Saber', strong: 'Archer'},
  {class: 'Assassin', weak: 'Caster', strong: 'Rider'},
  {class: 'Caster', weak: 'Rider', strong: 'Assassin'},
  {class: 'Berserker', weak: 'Everything', strong: 'Everything except Foreigner'},
  {class: 'Rider', weak: 'Assassin', strong: 'Caster'},
  {class: 'Mooncancer', weak: 'Ruler', strong: 'Avenger'},
  {class: 'Foreigner', weak: 'Alter-Ego', strong: 'Berserker'},
  {class: 'Alter-Ego', weak: 'Pretender', strong: 'Foreigner'},
  {class: 'Ruler', weak: 'Avenger', strong: 'Mooncancer'},
  {class: 'Avenger', weak: 'Mooncancer', strong: 'Ruler'},
  {class: 'Pretender', weak: 'Foreigner', strong: 'Alter-Ego'}
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'weak': return compare(a.weak, b.weak, isAsc);
        case 'class': return compare(+a.class, +b.strong, isAsc);
        case 'strong': return compare(+a.strong, +b.strong, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
