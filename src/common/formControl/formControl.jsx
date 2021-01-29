import s from './formControl.module.css';

const FormControl = ({input, meta, ...props}) => {
   const hasError = meta.error && meta.touched;
    return (
        <div className={s.input + " "  + (hasError && s.error)} >
        <div>
        {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
    )
}

export const Input = (props) => {
    const{input, meta, child, ...restProps} = props;
    return (
    <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
    )
}
export const Textarea = (props) => {
    const{input, meta, child, ...restProps} = props;
    return (
    <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
    )
}