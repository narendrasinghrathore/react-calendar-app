import React, { Suspense } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { ILazyLoadingComponent } from 'models/ILazyLoadingComponent';

/**
 * Pass the component as children.
 * Import component reference using React.lazy(), for more details on lazy 
 * https://reactjs.org/docs/code-splitting.html#reactlazy.
 * It will show loading animation while component is being load dynamically 
 * ( i.e. loading component lazily ).
 * Skeleton component from material-ui is used to show loading animation. 
 * @param props React Children 
 */
export default function LazyLoadingComponent(props: { children: React.ReactChild, items?: ILazyLoadingComponent[] }) {

    const createItems: ILazyLoadingComponent[] = props.items ? props.items : [{ width: 40, height: 40, variant: 'circle' }, { height: 20, variant: 'text' }, { height: 100, variant: 'rect' }];

    const fallbackComponents = createItems.map((item: ILazyLoadingComponent, index: number) => {
        const attributes: any = {}
        Object.keys(item).forEach(key => {
            attributes[key] = item[key];
        })
        return < Skeleton key={index} {...attributes} animation="wave" />

    });
    return <>
        <Suspense fallback={fallbackComponents}>
            {props.children}
        </Suspense>
    </>;

}