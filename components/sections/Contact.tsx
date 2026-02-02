"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Phone, Mail, Send, ShieldCheck, Clock, MapPin, CheckCircle2, Sun } from "lucide-react";
import { Button, Card, CardContent, Input, Textarea, Select } from "@/components/ui";
import { siteConfig } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { contact, company, images } = siteConfig;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Get In Touch</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5"
          >
            {contact.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated" className="overflow-hidden border-0">
              {/* Form header */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 px-8 py-6 border-b border-primary-100/50">
                <h3 className="text-lg font-bold text-neutral-900">문의 양식</h3>
                <p className="text-sm text-neutral-600 mt-1">아래 양식을 작성해 주시면 빠르게 답변 드리겠습니다</p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      label={contact.form.nameLabel}
                      placeholder={contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      required
                      autoComplete="name"
                    />
                    <Input
                      name="email"
                      type="email"
                      label={contact.form.emailLabel}
                      placeholder={contact.form.emailPlaceholder}
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      name="phone"
                      type="tel"
                      label={contact.form.phoneLabel}
                      placeholder={contact.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                    />
                    <Select
                      name="type"
                      label={contact.form.typeLabel}
                      options={contact.form.typeOptions}
                      value={formData.type}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Textarea
                    name="message"
                    label={contact.form.messageLabel}
                    placeholder={contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    required
                    rows={5}
                  />

                  {/* Privacy Notice */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-primary-600" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{contact.privacy.text}</p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto btn-gradient group"
                    isLoading={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    {isSubmitting ? contact.form.submittingLabel : contact.form.submitLabel}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                      role="alert"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{contact.form.successMessage}</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                      role="alert"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 text-red-600 text-sm font-bold">!</span>
                      <span>{contact.form.errorMessage}</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-6">
            {/* Image showcase */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src={images.contact}
                alt="태양광 설치 현장"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl p-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">무료 사전 상담</p>
                    <p className="text-xs text-neutral-500">부담없이 문의하세요</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {contact.directContact.title}
            </h3>
            <p className="text-neutral-600 mb-6">
              직접 연락을 원하시면 아래 연락처로 문의해 주세요.
            </p>

            {/* Phone Card */}
            <Card variant="bordered" className="group hover:border-primary-300 hover:shadow-soft transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <a
                  href={`tel:${company.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-4 p-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">
                      {contact.directContact.phoneLabel}
                    </p>
                    <p className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">{company.phone}</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card variant="bordered" className="group hover:border-primary-300 hover:shadow-soft transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 p-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">
                      {contact.directContact.emailLabel}
                    </p>
                    <p className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors break-all">{company.email}</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-2xl p-6 border border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-semibold text-neutral-900">영업 시간</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">평일</span>
                  <span className="font-medium text-neutral-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">주말/공휴일</span>
                  <span className="font-medium text-neutral-500">휴무</span>
                </div>
                <div className="pt-3 mt-3 border-t border-neutral-200">
                  <p className="text-neutral-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    이메일 문의는 24시간 접수됩니다
                  </p>
                </div>
              </div>
            </div>

            {/* Location hint */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-50/50 border border-primary-100">
              <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-primary-800">
                전국 어디서나 온라인 상담이 가능합니다. 필요시 현장 방문 상담도 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
