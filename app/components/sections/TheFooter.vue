<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const UPDATED = '30 de maio de 2026'

const privacy = {
  title: 'Política de Privacidade',
  sections: [
    {
      h: '1. Quem somos',
      p: [
        'Esta Política de Privacidade descreve como a Madeira Verde LTDA (CNPJ 10.928.862/0001-32), responsável pelo produto digital MGR – Manual do Guarda Roupa, coleta, usa, armazena e protege os seus dados pessoais.',
        'Ao acessar este site e/ou adquirir o produto, você concorda com as práticas descritas nesta política, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).',
      ],
    },
    {
      h: '2. Dados que coletamos',
      p: [
        'Dados fornecidos por você: nome, e-mail, telefone/WhatsApp e dados necessários para a compra (processados pela plataforma de pagamento).',
        'Dados de navegação: endereço IP, tipo de dispositivo e navegador, páginas visitadas e tempo de permanência, coletados por meio de cookies e tecnologias similares.',
      ],
    },
    {
      h: '3. Como usamos os seus dados',
      p: [
        'Utilizamos os dados para processar a compra e liberar o acesso ao produto; prestar suporte e atendimento; enviar comunicações sobre o produto e ofertas; melhorar a experiência do site; e cumprir obrigações legais.',
      ],
    },
    {
      h: '4. Compartilhamento de dados',
      p: [
        'A compra é processada pela plataforma Hotmart, que possui política de privacidade própria. Podemos compartilhar dados com processadores de pagamento, ferramentas de e-mail/atendimento e autoridades, quando exigido por lei.',
        'Não vendemos os seus dados pessoais a terceiros.',
      ],
    },
    {
      h: '5. Cookies',
      p: [
        'Usamos cookies para o funcionamento do site, métricas e personalização. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador, ciente de que isso pode afetar algumas funcionalidades.',
      ],
    },
    {
      h: '6. Armazenamento e segurança',
      p: [
        'Adotamos medidas técnicas e organizacionais para proteger os seus dados contra acesso não autorizado, perda ou alteração. Nenhum método de transmissão pela internet é 100% seguro, mas trabalhamos para manter um ambiente protegido.',
      ],
    },
    {
      h: '7. Seus direitos (LGPD)',
      p: [
        'Você pode solicitar a qualquer momento: confirmação e acesso aos seus dados; correção de dados incompletos ou desatualizados; anonimização ou exclusão; portabilidade; e revogação do consentimento. Para exercer esses direitos, entre em contato pelos canais informados ao final.',
      ],
    },
    {
      h: '8. Retenção dos dados',
      p: [
        'Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas e as obrigações legais e fiscais aplicáveis.',
      ],
    },
    {
      h: '9. Alterações desta política',
      p: [
        'Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página, com a data da última atualização.',
      ],
    },
    {
      h: '10. Contato',
      p: [
        'Em caso de dúvidas sobre esta Política de Privacidade ou sobre seus dados, fale conosco pelo WhatsApp (11) 95071-2707.',
      ],
    },
  ],
}

const terms = {
  title: 'Termos de Uso',
  sections: [
    {
      h: '1. Aceitação dos termos',
      p: [
        'Ao acessar este site e/ou adquirir o produto MGR – Manual do Guarda Roupa, você declara ter lido e concordado com estes Termos de Uso. Caso não concorde, não utilize o site nem realize a compra.',
      ],
    },
    {
      h: '2. Sobre o produto',
      p: [
        'O MGR – Manual do Guarda Roupa é um produto 100% digital, composto por materiais como projetos, planilhas, listas de materiais e videoaulas, entregues e acessados online após a confirmação do pagamento.',
        'A compra concede uma licença de uso pessoal e intransferível do conteúdo.',
      ],
    },
    {
      h: '3. Pagamento e acesso',
      p: [
        'O pagamento é processado pela plataforma Hotmart. Após a confirmação, o acesso é liberado conforme as condições da plataforma. Eventuais impostos e tarifas seguem as regras vigentes.',
      ],
    },
    {
      h: '4. Garantia e reembolso',
      p: [
        'Você conta com garantia incondicional de 7 (sete) dias a partir da confirmação da compra. Se não ficar satisfeito por qualquer motivo dentro desse prazo, basta solicitar o reembolso e devolveremos 100% do valor pago, conforme a política da Hotmart.',
      ],
    },
    {
      h: '5. Propriedade intelectual',
      p: [
        'Todo o conteúdo do produto e do site (textos, imagens, projetos, planilhas, vídeos, marca e layout) é protegido por direitos autorais e pertence à Madeira Verde LTDA. É proibido copiar, reproduzir, distribuir, revender ou compartilhar o conteúdo, no todo ou em parte, sem autorização expressa.',
      ],
    },
    {
      h: '6. Uso permitido e proibições',
      p: [
        'O acesso é individual. É vedado compartilhar login/credenciais, disponibilizar o material a terceiros ou utilizá-lo para fins ilícitos. O descumprimento pode acarretar o cancelamento do acesso, sem reembolso, além das medidas legais cabíveis.',
      ],
    },
    {
      h: '7. Isenção sobre resultados',
      p: [
        'Este produto tem caráter educativo/informativo e não garante resultados financeiros. Os resultados podem variar de pessoa para pessoa, dependendo de dedicação, esforço e aplicação do conteúdo.',
      ],
    },
    {
      h: '8. Limitação de responsabilidade',
      p: [
        'A Madeira Verde LTDA não se responsabiliza por decisões, orçamentos, contratações de terceiros, execução de projetos ou prejuízos decorrentes do uso ou da interpretação do conteúdo pelo usuário.',
      ],
    },
    {
      h: '9. Suporte',
      p: [
        'O suporte ao cliente é prestado pelos canais oficiais informados, incluindo o WhatsApp (11) 95071-2707.',
      ],
    },
    {
      h: '10. Disposições gerais',
      p: [
        'Estes Termos podem ser atualizados a qualquer momento, valendo a versão publicada nesta página. Aplica-se a legislação brasileira, ficando eleito o foro do domicílio do consumidor para dirimir eventuais conflitos.',
      ],
    },
  ],
}

const openDoc = ref<null | 'privacy' | 'terms'>(null)
const currentDoc = computed(() =>
  openDoc.value === 'privacy' ? privacy : openDoc.value === 'terms' ? terms : null,
)
function close() {
  openDoc.value = null
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}
watch(openDoc, (v) => {
  if (typeof document !== 'undefined') document.body.style.overflow = v ? 'hidden' : ''
})
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <footer
    class="relative w-full overflow-hidden px-5 pb-9 pt-14 text-white sm:px-6 md:px-8 md:pt-16"
    style="background:#06291D;"
  >
    <div class="mx-auto w-full max-w-6xl">
      <!-- ── ÁREA PRINCIPAL ── -->
      <div class="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1px_1fr_1px_1.35fr] md:items-start md:gap-9">
        <!-- COL 1: MGR + descrição -->
        <div class="text-center md:text-left">
          <img
            src="/logo-mgr-t.png"
            alt="MGR — Manual do Guarda Roupa"
            width="1563"
            height="1006"
            class="mx-auto mb-5 h-auto md:mx-0"
            style="width:clamp(180px,24vw,230px);"
          />
          <p class="mx-auto max-w-xs leading-relaxed text-[#D2D2D2] md:mx-0" style="font-size:clamp(0.95rem,1.2vw,1.05rem);">
            O passo a passo definitivo para fazer seu guarda-roupa planejado pagando até 70% menos ou lucrando com isso.
          </p>
        </div>

        <!-- divisor -->
        <div class="hidden md:block" style="width:1px; align-self:stretch; background:linear-gradient(180deg,transparent,#D4AF37 18%,#D4AF37 82%,transparent);" aria-hidden="true"></div>

        <!-- COL 2: PRODUTO + EMPRESA -->
        <div class="flex flex-col gap-7 text-center md:text-left">
          <div>
            <div class="mb-2 flex items-center justify-center gap-3 md:justify-start">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2" style="border-color:#D4AF37; color:#D4AF37;">
                <i class="fa-solid fa-desktop" aria-hidden="true"></i>
              </span>
              <h3 class="font-extrabold uppercase tracking-wide" style="font-family:'Montserrat',sans-serif; color:#D4AF37; font-size:clamp(1.05rem,1.5vw,1.3rem);">Produto</h3>
            </div>
            <p class="leading-relaxed text-[#D2D2D2]" style="font-size:clamp(0.95rem,1.2vw,1.08rem);">
              MGR – Manual do Guarda Roupa<br />Produto 100% digital
            </p>
          </div>
          <div>
            <div class="mb-2 flex items-center justify-center gap-3 md:justify-start">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2" style="border-color:#D4AF37; color:#D4AF37;">
                <i class="fa-solid fa-building" aria-hidden="true"></i>
              </span>
              <h3 class="font-extrabold uppercase tracking-wide" style="font-family:'Montserrat',sans-serif; color:#D4AF37; font-size:clamp(1.05rem,1.5vw,1.3rem);">Empresa</h3>
            </div>
            <p class="leading-relaxed text-[#D2D2D2]" style="font-size:clamp(0.95rem,1.2vw,1.08rem);">
              Madeira Verde LTDA<br />CNPJ: 10.928.862/0001-32
            </p>
          </div>
        </div>

        <!-- divisor -->
        <div class="hidden md:block" style="width:1px; align-self:stretch; background:linear-gradient(180deg,transparent,#D4AF37 18%,#D4AF37 82%,transparent);" aria-hidden="true"></div>

        <!-- COL 3: Madeira Verde + GARANTIA -->
        <div class="text-center md:text-left">
          <img
            src="/logo%20madeiraverde.png"
            alt="Madeira Verde — Soluções em Móveis Planejados"
            width="1448"
            height="1086"
            class="mv-fade mx-auto mb-6 h-auto"
            style="width:clamp(210px,28vw,290px);"
          />
          <div class="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4 md:items-start">
            <span class="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border-[3px]" style="border-color:#D4AF37; color:#D4AF37;">
              <i class="fa-solid fa-circle-check text-3xl" aria-hidden="true"></i>
            </span>
            <div>
              <h3 class="mb-1 font-extrabold uppercase tracking-wide" style="font-family:'Montserrat',sans-serif; color:#D4AF37; font-size:clamp(1.05rem,1.5vw,1.3rem);">Garantia</h3>
              <p class="leading-relaxed text-[#D2D2D2]" style="font-size:clamp(0.92rem,1.15vw,1.02rem);">
                Garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- linha -->
      <div class="my-9 h-0.5 w-full" style="background:linear-gradient(90deg,transparent,#9D7830 6%,#9D7830 94%,transparent);" aria-hidden="true"></div>

      <!-- ── SELOS + PAGAMENTO (nativo e responsivo) ── -->
      <div class="flex flex-col items-center gap-6">
        <!-- linha 1: segurança -->
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <div class="flex items-center gap-2.5">
            <i class="fa-solid fa-lock text-2xl" style="color:#D4AF37;" aria-hidden="true"></i>
            <div class="text-left leading-tight">
              <strong class="block text-[0.82rem] font-extrabold uppercase text-white">Compra 100% Segura</strong>
              <small class="block text-[0.7rem] text-[#B5B5B5]">Seus dados protegidos</small>
            </div>
          </div>
          <span class="hidden h-9 w-px sm:block" style="background:rgba(212,175,55,0.35);" aria-hidden="true"></span>
          <div class="flex items-center gap-2.5">
            <i class="fa-solid fa-shield-halved text-2xl" style="color:#D4AF37;" aria-hidden="true"></i>
            <div class="text-left leading-tight">
              <strong class="block text-[0.82rem] font-extrabold uppercase text-white">Ambiente Seguro</strong>
              <small class="block text-[0.7rem] text-[#B5B5B5]">Dados criptografados</small>
            </div>
          </div>
          <span class="hidden h-9 w-px sm:block" style="background:rgba(212,175,55,0.35);" aria-hidden="true"></span>
          <div class="flex items-center gap-2.5">
            <i class="fa-solid fa-certificate text-2xl" style="color:#D4AF37;" aria-hidden="true"></i>
            <div class="text-left leading-tight">
              <strong class="block text-[0.82rem] font-extrabold uppercase text-white">Conteúdo Premium</strong>
              <small class="block text-[0.7rem] text-[#B5B5B5]">Acesso imediato após a confirmação</small>
            </div>
          </div>
        </div>

        <!-- separador sutil -->
        <span class="h-px w-40 max-w-[60%]" style="background:rgba(212,175,55,0.25);" aria-hidden="true"></span>

        <!-- linha 2: pagamento -->
        <div class="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <!-- Hotmart -->
          <div class="text-center leading-tight sm:text-left">
            <div class="flex items-center justify-center gap-1.5 sm:justify-start">
              <svg viewBox="0 0 24 24" class="h-[19px] w-[19px]" aria-hidden="true">
                <path d="M13 2c.5 3.5-2.5 4.5-2.5 7.6 0-1.3-1-2.3-2.1-2.6.3 2.3-2 3.4-2 6.6a6.6 6.6 0 0 0 13.2 0c0-4.3-3.3-5.4-4.3-8-.9 1.9-1.9 1-1.9-1.3 0-3 1.6-4.6-.4-7.9z" fill="#FF5C00"/>
              </svg>
              <span class="text-lg font-extrabold text-white" style="font-family:'Montserrat',sans-serif; letter-spacing:-0.02em;">hotmart</span>
            </div>
            <small class="block text-[0.7rem] text-[#B5B5B5]">Produto hospedado na plataforma Hotmart</small>
          </div>

          <span class="hidden h-9 w-px sm:block" style="background:rgba(212,175,55,0.35);" aria-hidden="true"></span>

          <!-- Cartões -->
          <div class="text-center">
            <div class="flex items-center justify-center gap-1.5">
              <span class="flex h-7 items-center rounded bg-white px-2 shadow-sm">
                <span style="color:#1A1F71; font-style:italic; font-weight:900; font-size:0.82rem; letter-spacing:-0.02em; font-family:Arial,Helvetica,sans-serif;">VISA</span>
              </span>
              <span class="flex h-7 items-center justify-center rounded bg-white px-2 shadow-sm">
                <svg viewBox="0 0 40 25" class="h-[17px] w-auto" aria-hidden="true">
                  <circle cx="15.5" cy="12.5" r="9" fill="#EB001B" />
                  <circle cx="24.5" cy="12.5" r="9" fill="#F79E1B" />
                  <path d="M20 5.7a9 9 0 0 1 0 13.6 9 9 0 0 1 0-13.6z" fill="#FF5F00" />
                </svg>
              </span>
              <span class="flex h-7 items-center rounded px-2 shadow-sm" style="background:#016FD0;">
                <span class="text-white" style="font-weight:900; font-size:0.6rem; letter-spacing:0.02em; font-family:Arial,Helvetica,sans-serif;">AMEX</span>
              </span>
              <span class="flex h-7 items-center gap-1 rounded bg-white px-2 shadow-sm">
                <svg viewBox="0 0 24 24" class="h-[16px] w-[16px]" aria-hidden="true">
                  <rect x="6.7" y="6.7" width="10.6" height="10.6" rx="2.4" transform="rotate(45 12 12)" fill="#32BCAD" />
                </svg>
                <span style="color:#32BCAD; font-weight:800; font-size:0.8rem; font-family:Arial,Helvetica,sans-serif;">pix</span>
              </span>
            </div>
            <small class="mt-1.5 block text-[0.7rem] text-[#B5B5B5]">Diversas formas de pagamento</small>
          </div>
        </div>
      </div>

      <!-- linha -->
      <div class="my-9 h-0.5 w-full" style="background:linear-gradient(90deg,transparent,#9D7830 6%,#9D7830 94%,transparent);" aria-hidden="true"></div>

      <!-- ── COPYRIGHT ── -->
      <div class="text-center text-[#D2D2D2]">
        <p class="leading-snug" style="font-size:clamp(0.95rem,1.3vw,1.15rem);">
          © 2026 Madeira Verde LTDA. Todos os direitos reservados.<br />
          <strong class="font-extrabold text-white">CNPJ: 10.928.862/0001-32</strong>
        </p>
        <p class="mx-auto mt-3 max-w-3xl leading-snug text-[#A9A9A9]" style="font-size:clamp(0.82rem,1.1vw,0.95rem);">
          Este produto não garante resultados financeiros. Os resultados podem variar de pessoa para pessoa, dependendo de dedicação, esforço e aplicação do conteúdo.
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1" style="font-size:0.85rem;">
          <button type="button" class="font-semibold underline-offset-2 transition hover:underline" style="color:#D4AF37;" @click="openDoc = 'privacy'">
            Política de Privacidade
          </button>
          <span style="color:#5A6B60;" aria-hidden="true">•</span>
          <button type="button" class="font-semibold underline-offset-2 transition hover:underline" style="color:#D4AF37;" @click="openDoc = 'terms'">
            Termos de Uso
          </button>
        </div>
      </div>
    </div>

    <!-- ── MODAL LEGAL (Privacidade / Termos) ── -->
    <Teleport to="body">
      <Transition name="lmodal">
        <div
          v-if="openDoc"
          class="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          :aria-label="currentDoc?.title"
          @click.self="close"
        >
          <div class="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl shadow-2xl" style="background:#F7F4EF;">
            <!-- header -->
            <div class="flex items-center justify-between gap-4 border-b px-5 py-4" style="background:#06291D; border-color:rgba(212,175,55,0.3);">
              <h2 class="font-extrabold text-white" style="font-family:'Montserrat',sans-serif; font-size:clamp(1.1rem,2.2vw,1.4rem);">{{ currentDoc?.title }}</h2>
              <button type="button" aria-label="Fechar" class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15" @click="close">
                <i class="fa-solid fa-xmark text-xl" aria-hidden="true"></i>
              </button>
            </div>
            <!-- corpo (rolável) -->
            <div class="overflow-y-auto px-5 py-5 sm:px-7">
              <p class="mb-4 text-[0.8rem]" style="color:#6B6B6B;">Última atualização: {{ UPDATED }}</p>
              <div v-for="(s, i) in currentDoc?.sections" :key="i" class="mb-4">
                <h3 class="mb-1 font-extrabold" style="font-family:'Montserrat',sans-serif; color:#003321; font-size:1rem;">{{ s.h }}</h3>
                <p v-for="(par, j) in s.p" :key="j" class="mb-1.5 leading-relaxed" style="color:#2B2B2B; font-size:0.92rem;">{{ par }}</p>
              </div>
            </div>
            <!-- rodapé -->
            <div class="border-t px-5 py-3 text-center" style="border-color:#E7E1D8;">
              <button type="button" class="rounded-lg px-6 py-2 text-sm font-bold text-white transition hover:opacity-90" style="background:#06291D;" @click="close">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<style scoped>
/* esfuma as bordas do logo Madeira Verde para dissolver o fundo escuro no footer */
.mv-fade {
  -webkit-mask-image: radial-gradient(ellipse 94% 88% at 50% 50%, #000 72%, transparent 100%);
  mask-image: radial-gradient(ellipse 94% 88% at 50% 50%, #000 72%, transparent 100%);
}

/* Modal legal (Privacidade / Termos) */
.lmodal-enter-active,
.lmodal-leave-active {
  transition: opacity 0.25s ease;
}
.lmodal-enter-from,
.lmodal-leave-to {
  opacity: 0;
}
</style>
