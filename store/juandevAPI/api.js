import axios from "axios"
const juandevAPI = axios.create({
  baseURL: "https://juan0307-dev-96978.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_malzhar_list(payload) {
  return juandevAPI.get(`/api/v1/malzhar/`)
}
function api_v1_malzhar_create(payload) {
  return juandevAPI.post(`/api/v1/malzhar/`, payload.data)
}
function api_v1_malzhar_retrieve(payload) {
  return juandevAPI.get(`/api/v1/malzhar/${payload.id}/`)
}
function api_v1_malzhar_update(payload) {
  return juandevAPI.put(`/api/v1/malzhar/${payload.id}/`, payload.data)
}
function api_v1_malzhar_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/malzhar/${payload.id}/`, payload.data)
}
function api_v1_malzhar_destroy(payload) {
  return juandevAPI.delete(`/api/v1/malzhar/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_malzhar_list,
  api_v1_malzhar_create,
  api_v1_malzhar_retrieve,
  api_v1_malzhar_update,
  api_v1_malzhar_partial_update,
  api_v1_malzhar_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
