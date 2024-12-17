"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

//form spree
import { useForm, ValidationError } from "@formspree/react";

//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqakwgwp");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center xl:flex-row gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="mb-12 text-center xl:text-left font-secondary text-4xl">
            vamos trabalhar juntos !!!
          </div>

          <div className="flex mx-auto lg:mx-0 flex-1 flex-col">
            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
              {/* firstname & lastname */}
              <div className="flex gap-8">
                {/* firstname */}
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium"
                  >
                    Nome <span className="text-accent">*</span>
                  </label>
                  <Input
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    placeholder="Nome"
                    required
                  />
                </div>

                {/* lastname */}
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium"
                  >
                    Sobrenome <span className="text-accent">*</span>
                  </label>
                  <Input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    placeholder="Sobrenome"
                    required
                  />
                </div>
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <Input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="SeuEmail@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
                >
                  Telefone
                </label>
                <Input
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Mensagem <span className="text-accent">*</span>
                </label>
                <Textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className=""
                  placeholder="Escreva uma mensagem..."
                  rows="5"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* button */}
              <Button
                type="submit"
                disabled={state.submitting}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 border border-accent-hover hover:bg-accent text-primary bg-accent-hover rounded-[8px] transition-all duration-500"
              >
                {state.submitting ? (
                  <span>Envindo...</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={`absolute transition-opacity
                    duration-500 ease-in-out ${
                      showIcon ? "opacity-100" : "opacity-0"
                    }`}
                    />
                    {/* text */}
                    <span
                      className={`transition-opacity duration-500 ease-out ${
                        showIcon ? "opacity-0" : "opacity-100 *:"
                      }`}
                    >
                      Enviar mensagem
                    </span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          className="hidden lg:flex relative w-[620px] h-[560px] mix-blend-lighten rounded-xl -right-14 -bottom-3 overflow-hidden"
        >
          <Image
            src="/contact/pc.png"
            className="object-cover opacity-50"
            fill
            quality={100}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
