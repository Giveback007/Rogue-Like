import { connect } from 'react-redux';

export function connector(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) {
    return (target: any) => (connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}