import { useForm } from "react-hook-form"

interface AddContactFormProps {
    onSubmit: any;
  }

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit } = useForm();

 
  return (
    <form  onSubmit={handleSubmit(props.onSubmit)} style={{ display: "flex", flexDirection:"column"}}>

        <input
          {...register('firstName',{ required: true })}
        />
        
        <input
          {...register('lastName',{ required: true })}
        />
       
        <input
          {...register('email',{ required: true })}
        />
       
         <input
          {...register('avatar',{ required: true })}
        />
         
      <button
        type="submit"
        onClick={()=> console.log(props.onSubmit)}
      >
        Submit
      </button>
    </form>
  );
}