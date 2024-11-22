import AuthForm from "@/components/AuthForm";

export default function Home() {

  const firstObject = {
    a: {
      b: {
        c: 1,
        d: 'string',
        e: {
          num: 1
        }
      }
    }
  };
  
  const secondObject = {
    a: {
      b: {
        e: {
          num: 1,
        },
        d: 'string',
        c: 1,
      }
    }
  };
  function deepEqual (obj1, obj2) {

  }
  
  deepEqual(firstObject, secondObject); // true
  deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
  deepEqual(1, 2); // false
  deepEqual(true, false); // false

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AuthForm />
    </div>
  );
}
