<script setup lang="ts">
// Footer institucional — componente visual
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
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* esfuma as bordas do logo Madeira Verde para dissolver o fundo escuro no footer */
.mv-fade {
  -webkit-mask-image: radial-gradient(ellipse 94% 88% at 50% 50%, #000 72%, transparent 100%);
  mask-image: radial-gradient(ellipse 94% 88% at 50% 50%, #000 72%, transparent 100%);
}
</style>
