@@ .. @@
       .send(
         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
         {
           from_name: form.name,
           to_name: "Fabio La Rocca",
           from_email: form.email,
           to_email: "fabio.rock84@gmail.com",
           message: form.message,
         },
         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
       )
       .then(
         () => {
           setLoading(false);
           showAlert({
             show: true,
-            text: "Thank you for your message 😃",
+            text: "Grazie per il tuo messaggio! 😃",
             type: "success",
           });
@@ .. @@
           setCurrentAnimation("idle");
           showAlert({
             show: true,
-            text: "I didn't receive your message 😢",
+            text: "Non ho ricevuto il tuo messaggio 😢",
             type: "danger",
           });
         }
@@ .. @@
       {alert.show && <Alert {...alert} />}

       <div className='flex-1 min-w-[50%] flex flex-col'>
-        <h1 className='head-text'>Get in Touch</h1>
+        <h1 className='head-text'>Contattami</h1>

         <form
           ref={formRef}
@@ .. @@
           className='w-full flex flex-col gap-7 mt-14'
         >
           <label className='text-black-500 font-semibold'>
-            Name
+            Nome
             <input
               type='text'
               name='name'
               className='input'
-              placeholder='John'
+              placeholder='Mario'
               required
               value={form.name}
               onChange={handleChange}
@@ .. @@
             <input
               type='email'
               name='email'
               className='input'
-              placeholder='John@gmail.com'
+              placeholder='mario@esempio.com'
               required
               value={form.email}
               onChange={handleChange}
@@ .. @@
             onBlur={handleBlur}
           />
           <label className='text-black-500 font-semibold'>
-            Your Message
+            Il tuo messaggio
             <textarea
               name='message'
               rows='4'
               className='textarea'
-              placeholder='Write your thoughts here...'
+              placeholder='Scrivi il tuo messaggio qui...'
               value={form.message}
               onChange={handleChange}
               onFocus={handleFocus}
@@ .. @@
             onFocus={handleFocus}
             onBlur={handleBlur}
           >
-            {loading ? "Sending..." : "Submit"}
+            {loading ? "Invio in corso..." : "Invia"}
           </button>